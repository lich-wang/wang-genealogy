---
schema: wang-person/v1
id: p_UxzZLu8TWSxUdnHB2PFPJj
status: active
merged_into: null
display_name: 席筠
revision: 1
cbdb_id: 87574
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Va0kPDp1oO29hO9wUySdp7
        subject_person_id: p_UxzZLu8TWSxUdnHB2PFPJj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 席筠（1741—1776），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 87574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPCfNRjpMqNhcMUQnhznLq
          claim_id: c_Va0kPDp1oO29hO9wUySdp7
          source_id: s_Mz9wd6O2iLW8KjXntGOdm4
          stance: supports
          locator: CBDB:87574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mz9wd6O2iLW8KjXntGOdm4
            source_type: api_record
            title: 中国历代人物传记资料库：席筠（CBDB 87574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87574&o=json
            external_identifier: CBDB:87574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tM1J7a8gXVcL-3smiv-fqG
        subject_person_id: p_UxzZLu8TWSxUdnHB2PFPJj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 席筠
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IqHWMx8iYQoeEqCPcJ1u6M
          claim_id: c_tM1J7a8gXVcL-3smiv-fqG
          source_id: s_Mz9wd6O2iLW8KjXntGOdm4
          stance: supports
          locator: CBDB:87574
          quotation: null
          interpretation_note: CBDB 明确记录的王岱配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_URSO__3FzQ0QCcQo5C2Ayl
        subject_person_id: p_4aiNxxfmrMuTaV7QK3BNpi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UxzZLu8TWSxUdnHB2PFPJj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mpuIw3J_8dhNOKG9GJ2Q64
          claim_id: c_URSO__3FzQ0QCcQo5C2Ayl
          source_id: s_Mz9wd6O2iLW8KjXntGOdm4
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1930, HuWenKai #469：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4aiNxxfmrMuTaV7QK3BNpi
        status: active
        display_name: 王岱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 席筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 席筠（1741—1776），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 87574） | accepted |
| name.primary | 席筠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4aiNxxfmrMuTaV7QK3BNpi | 王岱 | accepted |

## 外部来源

- [中国历代人物传记资料库：席筠（CBDB 87574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=87574&o=json)
