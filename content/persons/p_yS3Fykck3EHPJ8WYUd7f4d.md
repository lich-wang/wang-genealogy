---
schema: wang-person/v1
id: p_yS3Fykck3EHPJ8WYUd7f4d
status: active
merged_into: null
display_name: 王樸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4jtT74oQkyyf1uCbcn7B7i
        subject_person_id: p_yS3Fykck3EHPJ8WYUd7f4d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cEzZDMxyb5KhNieHzNmcWA
          claim_id: c_4jtT74oQkyyf1uCbcn7B7i
          source_id: s_d1mZ8Zx5aUpG7QYZEZ28Uj
          stance: supports
          locator: CBDB:40517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（40517）
          source: &a1
            id: s_d1mZ8Zx5aUpG7QYZEZ28Uj
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 40517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=40517&o=json
            external_identifier: CBDB:40517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BrCo9Xw7CNtcvjPNNem1UU
        subject_person_id: p_yS3Fykck3EHPJ8WYUd7f4d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 915年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wo8XamT7CByd72gutVQYFe
          claim_id: c_BrCo9Xw7CNtcvjPNNem1UU
          source_id: s_d1mZ8Zx5aUpG7QYZEZ28Uj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KPiW82aXkoYwxLgR6tetLy
        subject_person_id: p_yS3Fykck3EHPJ8WYUd7f4d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QPLBLTEqAkVSATemmcwLA4
          claim_id: c_KPiW82aXkoYwxLgR6tetLy
          source_id: s_d1mZ8Zx5aUpG7QYZEZ28Uj
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
        id: c_XQbb14D8zvf1oywZKsUo9c
        subject_person_id: p_yS3Fykck3EHPJ8WYUd7f4d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸（915年—959年），後周人物。籍贯東平，身份为工於文，入仕進士，曾任樞密使、比部郎中、東都留守。（中国历代人物传记资料库 CBDB 40517）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LzZq3mFAvEUFkAAciGrQBp
          claim_id: c_XQbb14D8zvf1oywZKsUo9c
          source_id: s_d1mZ8Zx5aUpG7QYZEZ28Uj
          stance: supports
          locator: CBDB:40517
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
  descendants: []
  other: []
---

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| birth.date | 915年 | accepted |
| death.date | 959年 | accepted |
| bio.summary | 王樸（915年—959年），後周人物。籍贯東平，身份为工於文，入仕進士，曾任樞密使、比部郎中、東都留守。（中国历代人物传记资料库 CBDB 40517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 40517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=40517&o=json)
