---
schema: wang-person/v1
id: p_kQwgd2Kqe1t5Vu742gJ62f
status: active
merged_into: null
display_name: 王金彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VC6AVguBDnpN5RFp9ab2aT
        subject_person_id: p_kQwgd2Kqe1t5Vu742gJ62f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NEkYfaCnwbCn36awXNvRmA
          claim_id: c_VC6AVguBDnpN5RFp9ab2aT
          source_id: s_LnNPVgndSJGLLZDcMxd6ER
          stance: supports
          locator: CBDB:640514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640514）
          source: &a1
            id: s_LnNPVgndSJGLLZDcMxd6ER
            source_type: api_record
            title: 中国历代人物传记资料库：王金彝（CBDB 640514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640514&o=json
            external_identifier: CBDB:640514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GYVsEUMVkFwzCcPFXT18jK
        subject_person_id: p_kQwgd2Kqe1t5Vu742gJ62f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金彝，清人物。籍贯長沙，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640514）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wuz213SlgQKdQu20ORZdn8
          claim_id: c_GYVsEUMVkFwzCcPFXT18jK
          source_id: s_LnNPVgndSJGLLZDcMxd6ER
          stance: supports
          locator: CBDB:640514
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

# 王金彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金彝 | accepted |
| bio.summary | 王金彝，清人物。籍贯長沙，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金彝（CBDB 640514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640514&o=json)
