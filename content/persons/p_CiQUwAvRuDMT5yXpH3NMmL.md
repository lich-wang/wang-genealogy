---
schema: wang-person/v1
id: p_CiQUwAvRuDMT5yXpH3NMmL
status: active
merged_into: null
display_name: 王濬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EjSannqoKgsAXG8pXv7P4
        subject_person_id: p_CiQUwAvRuDMT5yXpH3NMmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7waaqbDFjeFccuUaJ7xTvg
          claim_id: c_1EjSannqoKgsAXG8pXv7P4
          source_id: s_CKPb1B92mqhB3Xvsgd7WqP
          stance: supports
          locator: CBDB:336831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336831）
          source: &a1
            id: s_CKPb1B92mqhB3Xvsgd7WqP
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 336831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336831&o=json
            external_identifier: CBDB:336831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cn5uFWtBMjGgQ56BFbXk2j
        subject_person_id: p_CiQUwAvRuDMT5yXpH3NMmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬，明人物。隆慶二年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 336831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x9iUXUZeg15GuTKxzbOoEd
          claim_id: c_cn5uFWtBMjGgQ56BFbXk2j
          source_id: s_CKPb1B92mqhB3Xvsgd7WqP
          stance: supports
          locator: CBDB:336831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_HTE-V5tc7jMrmxfNQH0RfL
        subject_person_id: p_CiQUwAvRuDMT5yXpH3NMmL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5eqa2npzGNMyLY9apLyg93
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUQs-9crxmxXIP3KRxLDVP
          claim_id: c_HTE-V5tc7jMrmxfNQH0RfL
          source_id: s_xSNFJ3uVoBPhNYenKBXfEa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xSNFJ3uVoBPhNYenKBXfEa
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 126890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json
            external_identifier: CBDB:126890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5eqa2npzGNMyLY9apLyg93
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | 王濬，明人物。隆慶二年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 336831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5eqa2npzGNMyLY9apLyg93 | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 336831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336831&o=json)
- [中国历代人物传记资料库：王儼（CBDB 126890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126890&o=json)
