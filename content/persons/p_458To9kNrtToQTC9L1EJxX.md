---
schema: wang-person/v1
id: p_458To9kNrtToQTC9L1EJxX
status: active
merged_into: null
display_name: 王文洽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rgP3BmcS9D6LkSUcRd1vG6
        subject_person_id: p_458To9kNrtToQTC9L1EJxX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRR7KBkJ1r4N2Gy5WpTTKy
          claim_id: c_rgP3BmcS9D6LkSUcRd1vG6
          source_id: s_yNAkmysG1nxUsdHC8w6eB4
          stance: supports
          locator: CBDB:701733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701733）
          source: &a1
            id: s_yNAkmysG1nxUsdHC8w6eB4
            source_type: api_record
            title: 中国历代人物传记资料库：王文洽（CBDB 701733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701733&o=json
            external_identifier: CBDB:701733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyV96YtZCkCeBMdFNRtEog
        subject_person_id: p_458To9kNrtToQTC9L1EJxX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王文洽，清人物。籍贯長洲，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701733）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RlBZAd_ADqnKZILitcd4P5
          claim_id: c_ZyV96YtZCkCeBMdFNRtEog
          source_id: s_yNAkmysG1nxUsdHC8w6eB4
          stance: supports
          locator: CBDB:701733
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

# 王文洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文洽 | accepted |
| bio.summary | 王文洽，清人物。籍贯長洲，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 701733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文洽（CBDB 701733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701733&o=json)
