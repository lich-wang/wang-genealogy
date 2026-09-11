---
schema: wang-person/v1
id: p_WC2JBqdBvry1DrN3B8Rwf7
status: active
merged_into: null
display_name: 王逖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SweU2ws596Q5iBbTuKayoC
        subject_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Yw5unu2d8yWMMuUzGfu4j
          claim_id: c_SweU2ws596Q5iBbTuKayoC
          source_id: s_zrda6e3CB72aXw2iH1k699
          stance: supports
          locator: CBDB:141606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141606）
          source: &a1
            id: s_zrda6e3CB72aXw2iH1k699
            source_type: api_record
            title: 中国历代人物传记资料库：王逖（CBDB 141606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141606&o=json
            external_identifier: CBDB:141606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8fjnAhtuDncAwcayw6Fxj6
        subject_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 839年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BQahGMPyTqo5SGG2qW5K9M
          claim_id: c_8fjnAhtuDncAwcayw6Fxj6
          source_id: s_zrda6e3CB72aXw2iH1k699
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DChPk2VsRvHHGKqobYtgxX
        subject_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UcrGjhU5teCzWZkpm9niXT
          claim_id: c_DChPk2VsRvHHGKqobYtgxX
          source_id: s_zrda6e3CB72aXw2iH1k699
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KWDk3MRuwhahghp1JwMgQ3
        subject_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R9G66n9vCRFfsVD6jkCcnN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mnklw_yhAQPpPPzy4fF70e
          claim_id: c_KWDk3MRuwhahghp1JwMgQ3
          source_id: s_LjpU9UJWZrHP4mivQSZFHZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LjpU9UJWZrHP4mivQSZFHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 185520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185520&o=json
            external_identifier: CBDB:185520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R9G66n9vCRFfsVD6jkCcnN
        status: active
        display_name: 王勗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c__4xapf-ThXma0o452OThVW
        subject_person_id: p_KzAj6xaVy8V6z6Ty9mttBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WC2JBqdBvry1DrN3B8Rwf7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X0qHp8z_yTAiocwB3j5syI
          claim_id: c__4xapf-ThXma0o452OThVW
          source_id: s_GnG5jBjHDr2pFhzcogZtD9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 26：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GnG5jBjHDr2pFhzcogZtD9
            source_type: api_record
            title: 中国历代人物传记资料库：王惟忠（CBDB 157702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157702&o=json
            external_identifier: CBDB:157702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KzAj6xaVy8V6z6Ty9mttBC
        status: active
        display_name: 王惟忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王逖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逖 | accepted |
| death.date | 839年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_R9G66n9vCRFfsVD6jkCcnN | 王勗 | accepted |
| ancestors | p_KzAj6xaVy8V6z6Ty9mttBC | 王惟忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逖（CBDB 141606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141606&o=json)
- [中国历代人物传记资料库：王惟忠（CBDB 157702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157702&o=json)
- [中国历代人物传记资料库：王勗（CBDB 185520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185520&o=json)
