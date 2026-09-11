---
schema: wang-person/v1
id: p_PWySVEEHd7WgHjTPbweChX
status: active
merged_into: null
display_name: 王珫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_chYMUMkJYbDGuLnzQJT5y8
        subject_person_id: p_PWySVEEHd7WgHjTPbweChX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6JFag7Noid6rC1wp2aQpCd
          claim_id: c_chYMUMkJYbDGuLnzQJT5y8
          source_id: s_ScgWbDGakHkMQCdnsAjhx8
          stance: supports
          locator: CBDB:304530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304530）
          source: &a1
            id: s_ScgWbDGakHkMQCdnsAjhx8
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 304530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304530&o=json
            external_identifier: CBDB:304530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tXoBr1a83AgApCSWCukn1G
        subject_person_id: p_PWySVEEHd7WgHjTPbweChX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pNDkxrm6jCvhDiEJBvYakf
          claim_id: c_tXoBr1a83AgApCSWCukn1G
          source_id: s_ScgWbDGakHkMQCdnsAjhx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PkuDJ-ry9MqlKe0U6YnizE
        subject_person_id: p_PWySVEEHd7WgHjTPbweChX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb49FujZ7uRq-g9OUmWpgN
          claim_id: c_PkuDJ-ry9MqlKe0U6YnizE
          source_id: s_sJ3iEzhs44udb87E8NcpTD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sJ3iEzhs44udb87E8NcpTD
            source_type: api_record
            title: 中国历代人物传记资料库：王交（CBDB 126505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json
            external_identifier: CBDB:126505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
  other: []
---

# 王珫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珫（CBDB 304530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304530&o=json)
- [中国历代人物传记资料库：王交（CBDB 126505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126505&o=json)
