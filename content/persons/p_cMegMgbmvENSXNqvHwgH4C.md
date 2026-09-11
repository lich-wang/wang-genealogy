---
schema: wang-person/v1
id: p_cMegMgbmvENSXNqvHwgH4C
status: active
merged_into: null
display_name: 陳玉徽
revision: 1
cbdb_id: 566747
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4b89J3X3MkJD_OPricV5fX
        subject_person_id: p_cMegMgbmvENSXNqvHwgH4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳玉徽
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rWveJL7MEnKOUUok0vYkwI
          claim_id: c_4b89J3X3MkJD_OPricV5fX
          source_id: s_2kNcU-k-lWrA6uT6PwD0BC
          stance: supports
          locator: CBDB:566747
          quotation: null
          interpretation_note: CBDB 明确记录的王煜配偶
          source: &a1
            id: s_2kNcU-k-lWrA6uT6PwD0BC
            source_type: api_record
            title: 中国历代人物传记资料库：陳玉徽（CBDB 566747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566747&o=json
            external_identifier: CBDB:566747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YGI7tfD1aSKFcFrXI5Oju2
        subject_person_id: p_HMwCBdc5HvnD1Ls2osMQUM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cMegMgbmvENSXNqvHwgH4C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tOHB3YNA4925fmkKNZia4h
          claim_id: c_YGI7tfD1aSKFcFrXI5Oju2
          source_id: s_2kNcU-k-lWrA6uT6PwD0BC
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294329：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HMwCBdc5HvnD1Ls2osMQUM
        status: active
        display_name: 王煜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳玉徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳玉徽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HMwCBdc5HvnD1Ls2osMQUM | 王煜 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳玉徽（CBDB 566747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566747&o=json)
