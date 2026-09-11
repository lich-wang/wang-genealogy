---
schema: wang-person/v1
id: p_VLpAYT9MMLPmQdKZGFH68u
status: active
merged_into: null
display_name: 王廷璣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZQF2igJJ5iJ5Nx1qXKFRy
        subject_person_id: p_VLpAYT9MMLPmQdKZGFH68u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YeZq69DfG1Xadh2qWENKeW
          claim_id: c_kZQF2igJJ5iJ5Nx1qXKFRy
          source_id: s_LMgopf96mHPYnHCKkJkdW7
          stance: supports
          locator: CBDB:693261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693261）
          source: &a1
            id: s_LMgopf96mHPYnHCKkJkdW7
            source_type: api_record
            title: 中国历代人物传记资料库：王廷璣（CBDB 693261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693261&o=json
            external_identifier: CBDB:693261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pXxbuqfXmBs8L4RNS5TW6p
        subject_person_id: p_VLpAYT9MMLPmQdKZGFH68u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王廷璣，清人物。籍贯吳縣，身份为孝子/孝女，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693261）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aeNYxhw7XV72RugpHKirCs
          claim_id: c_pXxbuqfXmBs8L4RNS5TW6p
          source_id: s_LMgopf96mHPYnHCKkJkdW7
          stance: supports
          locator: CBDB:693261
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

# 王廷璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷璣 | accepted |
| bio.summary | 王廷璣，清人物。籍贯吳縣，身份为孝子/孝女，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷璣（CBDB 693261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693261&o=json)
