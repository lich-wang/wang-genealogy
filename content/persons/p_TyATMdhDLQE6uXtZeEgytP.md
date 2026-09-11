---
schema: wang-person/v1
id: p_TyATMdhDLQE6uXtZeEgytP
status: active
merged_into: null
display_name: 王璿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FpUWN4iwcCecBv7uJcxRem
        subject_person_id: p_TyATMdhDLQE6uXtZeEgytP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rHH4YZXpFpheRL3rK82XXS
          claim_id: c_FpUWN4iwcCecBv7uJcxRem
          source_id: s_mW7BpTS8i3S12SDY1dZ9ra
          stance: supports
          locator: CBDB:137926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137926）
          source: &a1
            id: s_mW7BpTS8i3S12SDY1dZ9ra
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 137926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137926&o=json
            external_identifier: CBDB:137926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_472dMFNE5ELQsk72WSFAXs
        subject_person_id: p_TyATMdhDLQE6uXtZeEgytP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，宋人物。寶祐進士，籍贯永春。（中国历代人物传记资料库 CBDB 137926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_urfB5CciyGzEOEzZfpiC6n
          claim_id: c_472dMFNE5ELQsk72WSFAXs
          source_id: s_mW7BpTS8i3S12SDY1dZ9ra
          stance: supports
          locator: CBDB:137926
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
        id: c_EpMB-fNu_gvQprUmP0A5GH
        subject_person_id: p_TyATMdhDLQE6uXtZeEgytP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TC2bLV4pDpTUDnUPxMR1tb
          claim_id: c_EpMB-fNu_gvQprUmP0A5GH
          source_id: s_PYdJ3bPsrZPp2Ae2zELaqV
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PYdJ3bPsrZPp2Ae2zELaqV
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 38800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38800&o=json
            external_identifier: CBDB:38800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GGJVngcs8ogdZy2FpEF4u
        status: active
        display_name: 王煥
        merged_into_person_id: null
    - claim:
        id: c_NmdRPeYTb27YxXuSppWwwH
        subject_person_id: p_TyATMdhDLQE6uXtZeEgytP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_x5chVJWUxFzThLSZwhLKJP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j34TT2COeY2GYnHX7jHfK7
          claim_id: c_NmdRPeYTb27YxXuSppWwwH
          source_id: s_mW7BpTS8i3S12SDY1dZ9ra
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x5chVJWUxFzThLSZwhLKJP
        status: active
        display_name: 王唐
        merged_into_person_id: null
  other: []
---

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，宋人物。寶祐進士，籍贯永春。（中国历代人物传记资料库 CBDB 137926） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6GGJVngcs8ogdZy2FpEF4u | 王煥 | accepted |
| descendants | p_x5chVJWUxFzThLSZwhLKJP | 王唐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 38800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38800&o=json)
- [中国历代人物传记资料库：王璿（CBDB 137926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137926&o=json)
