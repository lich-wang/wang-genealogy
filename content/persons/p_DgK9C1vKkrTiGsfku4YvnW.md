---
schema: wang-person/v1
id: p_DgK9C1vKkrTiGsfku4YvnW
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jys4eStVGJzq3GM87dNK1g
        subject_person_id: p_DgK9C1vKkrTiGsfku4YvnW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qgn1H3QEBNDF65vbVorJbJ
          claim_id: c_Jys4eStVGJzq3GM87dNK1g
          source_id: s_DQ4CpS9CS7NB4dPoiVLmhP
          stance: supports
          locator: CBDB:198834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198834）
          source: &a1
            id: s_DQ4CpS9CS7NB4dPoiVLmhP
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 198834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198834&o=json
            external_identifier: CBDB:198834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fKDM7yvCVDwRf8AmUmaWzy
        subject_person_id: p_DgK9C1vKkrTiGsfku4YvnW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1431年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MGJ31M7T4EGJdjEG5BmryX
          claim_id: c_fKDM7yvCVDwRf8AmUmaWzy
          source_id: s_DQ4CpS9CS7NB4dPoiVLmhP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AHL9SoFkCxovDh2pMvDuoJ
        subject_person_id: p_DgK9C1vKkrTiGsfku4YvnW
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
        - id: cs_42CTWnv5z9Ke46Nzq6kXgq
          claim_id: c_AHL9SoFkCxovDh2pMvDuoJ
          source_id: s_DQ4CpS9CS7NB4dPoiVLmhP
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
  ancestors:
    - claim:
        id: c_LnKIU4szNr01XexDbGehGY
        subject_person_id: p_7cr76wHm8ksRJLxWVbHk2S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DgK9C1vKkrTiGsfku4YvnW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZBAyjeabWF13MOZhFxBDl
          claim_id: c_LnKIU4szNr01XexDbGehGY
          source_id: s_MrePoiEfK9RXt3zdLFVwLo
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MrePoiEfK9RXt3zdLFVwLo
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 322129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322129&o=json
            external_identifier: CBDB:322129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7cr76wHm8ksRJLxWVbHk2S
        status: active
        display_name: 王昶
        merged_into_person_id: null
    - claim:
        id: c_WXoxG0IBGk2KFQsceCShXK
        subject_person_id: p_dK3eUipPF2KASr5XQwRLn1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DgK9C1vKkrTiGsfku4YvnW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03QgduO_jbKz5DJ6sTpRXH
          claim_id: c_WXoxG0IBGk2KFQsceCShXK
          source_id: s_GDhFCVzzDGo9Nmf4hTxbBb
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GDhFCVzzDGo9Nmf4hTxbBb
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 322118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322118&o=json
            external_identifier: CBDB:322118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dK3eUipPF2KASr5XQwRLn1
        status: active
        display_name: 王珙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1431年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_7cr76wHm8ksRJLxWVbHk2S | 王昶 | accepted |
| ancestors | p_dK3eUipPF2KASr5XQwRLn1 | 王珙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 322129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322129&o=json)
- [中国历代人物传记资料库：王珙（CBDB 322118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322118&o=json)
- [中国历代人物传记资料库：王綸（CBDB 198834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198834&o=json)
