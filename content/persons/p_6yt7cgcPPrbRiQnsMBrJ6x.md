---
schema: wang-person/v1
id: p_6yt7cgcPPrbRiQnsMBrJ6x
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_asTXyVGj6Ckjd1nxEjAXbF
        subject_person_id: p_6yt7cgcPPrbRiQnsMBrJ6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8u8d6VNvkeUbZgcrMs63xK
          claim_id: c_asTXyVGj6Ckjd1nxEjAXbF
          source_id: s_uGELq3VgHwB348vWo94gx2
          stance: supports
          locator: CBDB:92106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92106）
          source: &a1
            id: s_uGELq3VgHwB348vWo94gx2
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 92106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92106&o=json
            external_identifier: CBDB:92106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k2cCvoKS6QQe9vsqkToYZZ
        subject_person_id: p_6yt7cgcPPrbRiQnsMBrJ6x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，唐人物。籍贯湘南;南湘，身份为詩人。（中国历代人物传记资料库 CBDB 92106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6nBhEVJSe5IUzhy9I40l-w
          claim_id: c_k2cCvoKS6QQe9vsqkToYZZ
          source_id: s_uGELq3VgHwB348vWo94gx2
          stance: supports
          locator: CBDB:92106
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，唐人物。籍贯湘南;南湘，身份为詩人。（中国历代人物传记资料库 CBDB 92106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 92106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92106&o=json)
