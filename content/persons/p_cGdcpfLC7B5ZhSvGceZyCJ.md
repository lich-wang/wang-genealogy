---
schema: wang-person/v1
id: p_cGdcpfLC7B5ZhSvGceZyCJ
status: active
merged_into: null
display_name: 王靜婉
cbdb_id: 101444
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTCiRbvMVykAgDps3cVZ1e
        subject_person_id: p_cGdcpfLC7B5ZhSvGceZyCJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜婉（生于1254年），元人物。籍贯餘干州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 101444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nvJr8dgThAWkSm4kmBSmvZ
          claim_id: c_VTCiRbvMVykAgDps3cVZ1e
          source_id: s_8swMNMdEnNCiERkohUBQ6A
          stance: supports
          locator: CBDB:101444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8swMNMdEnNCiERkohUBQ6A
            source_type: api_record
            title: 中国历代人物传记资料库：王靜婉（CBDB 101444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101444&o=json
            external_identifier: CBDB:101444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ue14xAqWxi2dNoi61md6Gf
        subject_person_id: p_cGdcpfLC7B5ZhSvGceZyCJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1254年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1254-01-01
            latest: 1254-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ezw1TGXJASEk9LsRYVgAk9
          claim_id: c_ue14xAqWxi2dNoi61md6Gf
          source_id: s_8swMNMdEnNCiERkohUBQ6A
          stance: supports
          locator: CBDB:101444
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1254
          source:
            id: s_8swMNMdEnNCiERkohUBQ6A
            source_type: api_record
            title: 中国历代人物传记资料库：王靜婉（CBDB 101444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101444&o=json
            external_identifier: CBDB:101444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNgVyy5xFqAAAkgDCjbwL3
        subject_person_id: p_cGdcpfLC7B5ZhSvGceZyCJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜婉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v5db8dJkGUr1BGBqEqM7NJ
          claim_id: c_CNgVyy5xFqAAAkgDCjbwL3
          source_id: s_8swMNMdEnNCiERkohUBQ6A
          stance: supports
          locator: CBDB:101444
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1254
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

# 王靜婉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靜婉（生于1254年），元人物。籍贯餘干州，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 101444） | accepted |
| birth.date | 1254年 | accepted |
| name.primary | 王靜婉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靜婉（CBDB 101444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101444&o=json)
