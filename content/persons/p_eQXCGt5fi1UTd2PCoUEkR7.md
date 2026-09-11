---
schema: wang-person/v1
id: p_eQXCGt5fi1UTd2PCoUEkR7
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7S6tKZy2oSEHTAVpFfjpZ
        subject_person_id: p_eQXCGt5fi1UTd2PCoUEkR7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4LMJQQuPC3iyNjzKBSi3Mb
          claim_id: c_e7S6tKZy2oSEHTAVpFfjpZ
          source_id: s_Gy63bZ2JBoqBFYwh6GV9pL
          stance: supports
          locator: CBDB:465001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465001）
          source: &a1
            id: s_Gy63bZ2JBoqBFYwh6GV9pL
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 465001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465001&o=json
            external_identifier: CBDB:465001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LcsENFAENFGWfBB51LZeH1
        subject_person_id: p_eQXCGt5fi1UTd2PCoUEkR7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘，明人物。籍贯槁城，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 465001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u3KJTTOE7twtLAJiPmyD-T
          claim_id: c_LcsENFAENFGWfBB51LZeH1
          source_id: s_Gy63bZ2JBoqBFYwh6GV9pL
          stance: supports
          locator: CBDB:465001
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| bio.summary | 王三聘，明人物。籍贯槁城，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 465001） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 465001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465001&o=json)
