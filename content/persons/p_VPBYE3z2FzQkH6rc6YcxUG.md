---
schema: wang-person/v1
id: p_VPBYE3z2FzQkH6rc6YcxUG
status: active
merged_into: null
display_name: 王雄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZhtywjCcqLCHvMDeRzoNkQ
        subject_person_id: p_VPBYE3z2FzQkH6rc6YcxUG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BQFmTaSbRVE8CXBg3fVftx
          claim_id: c_ZhtywjCcqLCHvMDeRzoNkQ
          source_id: s_xALNDhLB8fdpmK65TvxrJN
          stance: supports
          locator: CBDB:22038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22038）
          source: &a1
            id: s_xALNDhLB8fdpmK65TvxrJN
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 22038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22038&o=json
            external_identifier: CBDB:22038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yCzQmiJSP3JJcrPXunMUzG
        subject_person_id: p_VPBYE3z2FzQkH6rc6YcxUG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 22038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wjA-83SNB-koWXZjzNqPpM
          claim_id: c_yCzQmiJSP3JJcrPXunMUzG
          source_id: s_xALNDhLB8fdpmK65TvxrJN
          stance: supports
          locator: CBDB:22038
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

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | 王雄，唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 22038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 22038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22038&o=json)
