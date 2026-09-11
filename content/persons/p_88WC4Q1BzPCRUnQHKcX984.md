---
schema: wang-person/v1
id: p_88WC4Q1BzPCRUnQHKcX984
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gXtPWEFz4p6twNrZKwuXpK
        subject_person_id: p_88WC4Q1BzPCRUnQHKcX984
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QbDY6vHJuCis6cKMfwg1Su
          claim_id: c_gXtPWEFz4p6twNrZKwuXpK
          source_id: s_UPM7btK78ccPWgZ4akAvDK
          stance: supports
          locator: CBDB:26507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26507）
          source: &a1
            id: s_UPM7btK78ccPWgZ4akAvDK
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 26507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json
            external_identifier: CBDB:26507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qHKt6tCKd6UMiCaNmEFF3S
        subject_person_id: p_88WC4Q1BzPCRUnQHKcX984
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为後蜀人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VUQ8oNB1fsYbSzYNB46SQ
          claim_id: c_qHKt6tCKd6UMiCaNmEFF3S
          source_id: s_UPM7btK78ccPWgZ4akAvDK
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
        id: c_o6AXaeEwx0ojpTKfPP2-Gg
        subject_person_id: p_88WC4Q1BzPCRUnQHKcX984
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HFQK5L8YrnKx1CYJmv1MtZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VEbvH_VRHbn-qS2iXNyMkk
          claim_id: c_o6AXaeEwx0ojpTKfPP2-Gg
          source_id: s_UPM7btK78ccPWgZ4akAvDK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二四 王汲墓誌：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HFQK5L8YrnKx1CYJmv1MtZ
        status: active
        display_name: 王汲
        merged_into_person_id: null
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | CBDB 记载为後蜀人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HFQK5L8YrnKx1CYJmv1MtZ | 王汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 26507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26507&o=json)
