---
schema: wang-person/v1
id: p_72o4rDD1BHyKkvsVS4def1
status: active
merged_into: null
display_name: 王仁卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8dTEtVCFS39HMCva2N7hPm
        subject_person_id: p_72o4rDD1BHyKkvsVS4def1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FhXrbQLPLTSAvm1EUMc1Ax
          claim_id: c_8dTEtVCFS39HMCva2N7hPm
          source_id: s_X9GAszJzRPk4VcKotrSCLq
          stance: supports
          locator: CBDB:236740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236740）
          source: &a1
            id: s_X9GAszJzRPk4VcKotrSCLq
            source_type: api_record
            title: 中国历代人物传记资料库：王仁卿（CBDB 236740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236740&o=json
            external_identifier: CBDB:236740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E7GJ3MozrEMMHnmtng5jSE
        subject_person_id: p_72o4rDD1BHyKkvsVS4def1
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
        - id: cs_6v7hoF5bEQXtrc79UiJk7J
          claim_id: c_E7GJ3MozrEMMHnmtng5jSE
          source_id: s_X9GAszJzRPk4VcKotrSCLq
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
        id: c_mTTsYXH5qwpZXk8oo_bCRH
        subject_person_id: p_72o4rDD1BHyKkvsVS4def1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yBYAm-M46ca9ToSKTxAQOo
          claim_id: c_mTTsYXH5qwpZXk8oo_bCRH
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2jrpdwRHB37XPK8y1Q56W
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 207831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json
            external_identifier: CBDB:207831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2iNYB7MMKmz6yPS4rjCAQD
        status: active
        display_name: 王彰
        merged_into_person_id: null
  other: []
---

# 王仁卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2iNYB7MMKmz6yPS4rjCAQD | 王彰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁卿（CBDB 236740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236740&o=json)
- [中国历代人物传记资料库：王彰（CBDB 207831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json)
