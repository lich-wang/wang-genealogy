---
schema: wang-person/v1
id: p_9Z66nsiRmG6AwqPzes2Ub1
status: active
merged_into: null
display_name: 王啟原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SavJALUAZ7VLKSVR33Ek1K
        subject_person_id: p_9Z66nsiRmG6AwqPzes2Ub1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7qBzKV4Mk1bfpN6EmS4FLU
          claim_id: c_SavJALUAZ7VLKSVR33Ek1K
          source_id: s_uyZ8emB3bXAHs2UK7VhQ7e
          stance: supports
          locator: CBDB:636542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636542）
          source: &a1
            id: s_uyZ8emB3bXAHs2UK7VhQ7e
            source_type: api_record
            title: 中国历代人物传记资料库：王啟原（CBDB 636542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636542&o=json
            external_identifier: CBDB:636542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v2mSGECJ5bSRh2fwS9NgKz
        subject_person_id: p_9Z66nsiRmG6AwqPzes2Ub1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王啟原，清人物。籍贯長沙，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636542）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VpOzxVg0gE_aBc_fzd8PZt
          claim_id: c_v2mSGECJ5bSRh2fwS9NgKz
          source_id: s_uyZ8emB3bXAHs2UK7VhQ7e
          stance: supports
          locator: CBDB:636542
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

# 王啟原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟原 | accepted |
| bio.summary | 王啟原，清人物。籍贯長沙，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟原（CBDB 636542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636542&o=json)
