---
schema: wang-person/v1
id: p_ru6mWgTmWQCdGsMEbf9P4w
status: active
merged_into: null
display_name: 王夢聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMP8E4X6AFRyHSJqHMTmSG
        subject_person_id: p_ru6mWgTmWQCdGsMEbf9P4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tofR762bcUMNdCF3WbTNxH
          claim_id: c_MMP8E4X6AFRyHSJqHMTmSG
          source_id: s_9dK32wPpnXzj2Lc3z5Zqfa
          stance: supports
          locator: CBDB:101398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101398）
          source: &a1
            id: s_9dK32wPpnXzj2Lc3z5Zqfa
            source_type: api_record
            title: 中国历代人物传记资料库：王夢聲（CBDB 101398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101398&o=json
            external_identifier: CBDB:101398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EP6kVBg8XZvNGdSPJw9SMR
        subject_person_id: p_ru6mWgTmWQCdGsMEbf9P4w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢聲，元人物。籍贯建德路，入仕進士，曾任州學正。（中国历代人物传记资料库 CBDB 101398）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hT3BlMMYqC4drXHS5C0O4p
          claim_id: c_EP6kVBg8XZvNGdSPJw9SMR
          source_id: s_9dK32wPpnXzj2Lc3z5Zqfa
          stance: supports
          locator: CBDB:101398
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

# 王夢聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢聲 | accepted |
| bio.summary | 王夢聲，元人物。籍贯建德路，入仕進士，曾任州學正。（中国历代人物传记资料库 CBDB 101398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢聲（CBDB 101398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101398&o=json)
