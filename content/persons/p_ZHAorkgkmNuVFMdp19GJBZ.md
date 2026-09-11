---
schema: wang-person/v1
id: p_ZHAorkgkmNuVFMdp19GJBZ
status: active
merged_into: null
display_name: 王槐齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uKo9VaoQef29pSgLST225z
        subject_person_id: p_ZHAorkgkmNuVFMdp19GJBZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VAL5QpkLptJA5zcbLA3BQF
          claim_id: c_uKo9VaoQef29pSgLST225z
          source_id: s_m9E4xf5UQsopQALGH9owmu
          stance: supports
          locator: CBDB:638819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638819）
          source: &a1
            id: s_m9E4xf5UQsopQALGH9owmu
            source_type: api_record
            title: 中国历代人物传记资料库：王槐齢（CBDB 638819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638819&o=json
            external_identifier: CBDB:638819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76HgKR7ukn6nMG1y13An22
        subject_person_id: p_ZHAorkgkmNuVFMdp19GJBZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐齢，清人物。籍贯延安府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hmt1zTDrk5h3tKsTVonmhK
          claim_id: c_76HgKR7ukn6nMG1y13An22
          source_id: s_m9E4xf5UQsopQALGH9owmu
          stance: supports
          locator: CBDB:638819
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

# 王槐齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐齢 | accepted |
| bio.summary | 王槐齢，清人物。籍贯延安府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐齢（CBDB 638819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638819&o=json)
