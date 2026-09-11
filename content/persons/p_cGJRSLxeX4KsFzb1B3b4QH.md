---
schema: wang-person/v1
id: p_cGJRSLxeX4KsFzb1B3b4QH
status: active
merged_into: null
display_name: 王朝舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EbYTjC6hHwBm9mUszAn6TS
        subject_person_id: p_cGJRSLxeX4KsFzb1B3b4QH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DWcySo4HHxrqgQof16PmSh
          claim_id: c_EbYTjC6hHwBm9mUszAn6TS
          source_id: s_88NULD1KbAUBKGPdxujcJw
          stance: supports
          locator: CBDB:638608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638608）
          source: &a1
            id: s_88NULD1KbAUBKGPdxujcJw
            source_type: api_record
            title: 中国历代人物传记资料库：王朝舉（CBDB 638608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638608&o=json
            external_identifier: CBDB:638608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yBAuXu41p4BNhq5S1E1cAe
        subject_person_id: p_cGJRSLxeX4KsFzb1B3b4QH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王朝舉，清人物。籍贯平武，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638608）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jK_yUmUskulk38mUaovHvC
          claim_id: c_yBAuXu41p4BNhq5S1E1cAe
          source_id: s_88NULD1KbAUBKGPdxujcJw
          stance: supports
          locator: CBDB:638608
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

# 王朝舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝舉 | accepted |
| bio.summary | 王朝舉，清人物。籍贯平武，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝舉（CBDB 638608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638608&o=json)
