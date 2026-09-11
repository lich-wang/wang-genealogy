---
schema: wang-person/v1
id: p_6GGJVngcs8ogdZy2FpEF4u
status: active
merged_into: null
display_name: 王煥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tcePArew4gN6bHV31c1VqK
        subject_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TegujB7npSCzjzeqfaoCbv
          claim_id: c_tcePArew4gN6bHV31c1VqK
          source_id: s_PYdJ3bPsrZPp2Ae2zELaqV
          stance: supports
          locator: CBDB:38800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38800）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EMywo3PCbNdwYi9yh98Z17
        subject_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XKx3q2icxMdtkya7Abtjvd
          claim_id: c_EMywo3PCbNdwYi9yh98Z17
          source_id: s_PYdJ3bPsrZPp2Ae2zELaqV
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
        id: c_UYD_0yf8SSSUBSzXtcPSXV
        subject_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x5chVJWUxFzThLSZwhLKJP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EHCukaF5VS5MWtT7EIhMo
          claim_id: c_UYD_0yf8SSSUBSzXtcPSXV
          source_id: s_PYdJ3bPsrZPp2Ae2zELaqV
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x5chVJWUxFzThLSZwhLKJP
        status: active
        display_name: 王唐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_S8vvgbhumYf8uLgyzxot0S
        subject_person_id: p_6GGJVngcs8ogdZy2FpEF4u
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1DDzfsyLxno4VWmk3vfcFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wn50uz0DM3VjfDV1OO6Rz1
          claim_id: c_S8vvgbhumYf8uLgyzxot0S
          source_id: s_4wpFVmgMrF19cvvRzEuq0o
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4wpFVmgMrF19cvvRzEuq0o
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王煥妻)（CBDB 138430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138430&o=json
            external_identifier: CBDB:138430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1DDzfsyLxno4VWmk3vfcFc
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
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
          source: *a1
      object_person:
        id: p_TyATMdhDLQE6uXtZeEgytP
        status: active
        display_name: 王璿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x5chVJWUxFzThLSZwhLKJP | 王唐 | accepted |
| spouses | p_1DDzfsyLxno4VWmk3vfcFc | 陳氏 | accepted |
| ancestors | p_TyATMdhDLQE6uXtZeEgytP | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王煥妻)（CBDB 138430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138430&o=json)
- [中国历代人物传记资料库：王煥（CBDB 38800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38800&o=json)
