---
schema: wang-person/v1
id: p_oyFn2p9Jn2DEGpW4WAtPLg
status: active
merged_into: null
display_name: 王盛清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pPFJHMYBZFDwBg6vcZW3JA
        subject_person_id: p_oyFn2p9Jn2DEGpW4WAtPLg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zBb5NUqnHRE5ZSXbdNQewN
          claim_id: c_pPFJHMYBZFDwBg6vcZW3JA
          source_id: s_ffuRF4dAiBATqNBAN8HqFX
          stance: supports
          locator: CBDB:639532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639532）
          source: &a1
            id: s_ffuRF4dAiBATqNBAN8HqFX
            source_type: api_record
            title: 中国历代人物传记资料库：王盛清（CBDB 639532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639532&o=json
            external_identifier: CBDB:639532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4imuekAs4wH3Rp6McMHwSc
        subject_person_id: p_oyFn2p9Jn2DEGpW4WAtPLg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛清，清人物。籍贯蓬萊，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H-_n7RIbFzth57_IPraQVk
          claim_id: c_4imuekAs4wH3Rp6McMHwSc
          source_id: s_ffuRF4dAiBATqNBAN8HqFX
          stance: supports
          locator: CBDB:639532
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

# 王盛清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛清 | accepted |
| bio.summary | 王盛清，清人物。籍贯蓬萊，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盛清（CBDB 639532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639532&o=json)
