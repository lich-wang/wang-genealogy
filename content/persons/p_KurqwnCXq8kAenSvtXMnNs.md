---
schema: wang-person/v1
id: p_KurqwnCXq8kAenSvtXMnNs
status: active
merged_into: null
display_name: 王運昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MYbPuqWAPGUV3ZUSBtt1oH
        subject_person_id: p_KurqwnCXq8kAenSvtXMnNs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_53SX6EnD6HYjdYVe5CaBWH
          claim_id: c_MYbPuqWAPGUV3ZUSBtt1oH
          source_id: s_DrVGSLK6yA4M4zRMHB9ktK
          stance: supports
          locator: CBDB:640443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640443）
          source: &a1
            id: s_DrVGSLK6yA4M4zRMHB9ktK
            source_type: api_record
            title: 中国历代人物传记资料库：王運昌（CBDB 640443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640443&o=json
            external_identifier: CBDB:640443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f3GYsHQpx8KhFTy91ZiFXr
        subject_person_id: p_KurqwnCXq8kAenSvtXMnNs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運昌，清人物。籍贯洪雅，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GSaQlT9PhL6HVnRXLzZc_m
          claim_id: c_f3GYsHQpx8KhFTy91ZiFXr
          source_id: s_DrVGSLK6yA4M4zRMHB9ktK
          stance: supports
          locator: CBDB:640443
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

# 王運昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王運昌 | accepted |
| bio.summary | 王運昌，清人物。籍贯洪雅，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王運昌（CBDB 640443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640443&o=json)
