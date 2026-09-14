---
schema: wang-person/v1
id: p_XfFbR5xmjQvgTMhQ2KfFaU
status: active
merged_into: null
display_name: 王僖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_88J2hfLfZaEGjG8uH2174j
        subject_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_45DKFJositrkWHP5MbBPgL
          claim_id: c_88J2hfLfZaEGjG8uH2174j
          source_id: s_ZQa4AT5Q34N4yN4fehf7G7
          stance: supports
          locator: CBDB:214689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214689）
          source: &a1
            id: s_ZQa4AT5Q34N4yN4fehf7G7
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 214689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json
            external_identifier: CBDB:214689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBAutUmE5j2TsaFpNyD7r6
        subject_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214689）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2JYK3vhw3WBVKS0eMXgaZL
          claim_id: c_QBAutUmE5j2TsaFpNyD7r6
          source_id: s_ZQa4AT5Q34N4yN4fehf7G7
          stance: supports
          locator: CBDB:214689
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P8Hhh9ozJbaPKXYn6_SjP9
        subject_person_id: p_Pgpmm7wnTqLY7xY2HfhhZC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzTuZ9cfcHgkLMX0_CmFKY
          claim_id: c_P8Hhh9ozJbaPKXYn6_SjP9
          source_id: s_OKTQTAtt1s4ROZ0CTOpmzG
          stance: supports
          locator: CBDB：兄弟 王价（206196）之父／母 王繼乾
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王价 为同胞（CBDB 记「兄」），王价 之父／母即 王僖 之父／母。
          source:
            id: s_OKTQTAtt1s4ROZ0CTOpmzG
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 214689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json
            external_identifier: CBDB:214689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pgpmm7wnTqLY7xY2HfhhZC
        status: active
        display_name: 王繼乾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PpOoEz-SeyeWufPDSbP0iX
        subject_person_id: p_XfFbR5xmjQvgTMhQ2KfFaU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y879UiTRBKZaXHHY531ywf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RU5p09vvyhXt1_pkb-mB4E
          claim_id: c_PpOoEz-SeyeWufPDSbP0iX
          source_id: s_OKTQTAtt1s4ROZ0CTOpmzG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206196 王价）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OKTQTAtt1s4ROZ0CTOpmzG
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 214689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json
            external_identifier: CBDB:214689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y879UiTRBKZaXHHY531ywf
        status: active
        display_name: 王价
        merged_into_person_id: null
---

# 王僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僖 | accepted |
| bio.summary | 王僖，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pgpmm7wnTqLY7xY2HfhhZC | 王繼乾 | accepted |
| other | p_y879UiTRBKZaXHHY531ywf | 王价 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僖（CBDB 214689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214689&o=json)
