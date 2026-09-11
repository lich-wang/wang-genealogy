---
schema: wang-person/v1
id: p_N7sPyQaqL7RtcW9AWL7sqn
status: active
merged_into: null
display_name: 王道濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PuBUPJEfBGvDKgm377uCX
        subject_person_id: p_N7sPyQaqL7RtcW9AWL7sqn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNtEmcL8bXT16ErPXwBQtr
          claim_id: c_6PuBUPJEfBGvDKgm377uCX
          source_id: s_VsG5ifPdnzfHJGM5EHR92k
          stance: supports
          locator: CBDB:698651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698651）
          source: &a1
            id: s_VsG5ifPdnzfHJGM5EHR92k
            source_type: api_record
            title: 中国历代人物传记资料库：王道濟（CBDB 698651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698651&o=json
            external_identifier: CBDB:698651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C99KmxSdFzAUgNFGVyP99G
        subject_person_id: p_N7sPyQaqL7RtcW9AWL7sqn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道濟，明人物。籍贯武進，身份为死國難，入仕武舉進士，曾任把總、都督同知、都指揮僉事。（中国历代人物传记资料库 CBDB 698651）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KrXjI27b0Xfk4V1tZVaT1w
          claim_id: c_C99KmxSdFzAUgNFGVyP99G
          source_id: s_VsG5ifPdnzfHJGM5EHR92k
          stance: supports
          locator: CBDB:698651
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

# 王道濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道濟 | accepted |
| bio.summary | 王道濟，明人物。籍贯武進，身份为死國難，入仕武舉進士，曾任把總、都督同知、都指揮僉事。（中国历代人物传记资料库 CBDB 698651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道濟（CBDB 698651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698651&o=json)
