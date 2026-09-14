---
schema: wang-person/v1
id: p_vziyz3zwW1ehQDqEhJYHHM
status: active
merged_into: null
display_name: 王廷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWM5cAYBakuMKLaoLrGRm9
        subject_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2x9QTas6bcPxPSzdXi9nt
          claim_id: c_wWM5cAYBakuMKLaoLrGRm9
          source_id: s_616GqwDJ6xuFWAv3HVgkJb
          stance: supports
          locator: CBDB:209887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209887）
          source: &a1
            id: s_616GqwDJ6xuFWAv3HVgkJb
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 209887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json
            external_identifier: CBDB:209887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SVMB1qc2QxvNDQLYwLGodM
        subject_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷，明人物。隆慶五年進士，籍贯南充，曾任都察院左都御史、正治上卿、資德大夫。（中国历代人物传记资料库 CBDB 209887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zehlf70jjq1nFI679D58Ph
          claim_id: c_SVMB1qc2QxvNDQLYwLGodM
          source_id: s_616GqwDJ6xuFWAv3HVgkJb
          stance: supports
          locator: CBDB:209887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IHO1_EArwDOalAN7t3qLV9
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEXoszpNjIbrmOtZfHgduH
          claim_id: c_IHO1_EArwDOalAN7t3qLV9
          source_id: s_fH1gHnG06eydvN7UbVROaF
          stance: supports
          locator: CBDB：兄弟 王延（205861）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷 与 王延 为同胞（CBDB 记「弟」），王延 之父／母即 王廷 之父／母。
          source:
            id: s_fH1gHnG06eydvN7UbVROaF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 209887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json
            external_identifier: CBDB:209887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sHIZM9MFnNiKw8pHSE6sw8
        subject_person_id: p_PeNwc61mxTnzddmv7sBFLN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vziyz3zwW1ehQDqEhJYHHM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vKjWqMU7z03RYDBblgbxP7
          claim_id: c_sHIZM9MFnNiKw8pHSE6sw8
          source_id: s_fH1gHnG06eydvN7UbVROaF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205861 王延）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fH1gHnG06eydvN7UbVROaF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 209887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json
            external_identifier: CBDB:209887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PeNwc61mxTnzddmv7sBFLN
        status: active
        display_name: 王延
        merged_into_person_id: null
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | 王廷，明人物。隆慶五年進士，籍贯南充，曾任都察院左都御史、正治上卿、資德大夫。（中国历代人物传记资料库 CBDB 209887） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| other | p_PeNwc61mxTnzddmv7sBFLN | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 209887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209887&o=json)
