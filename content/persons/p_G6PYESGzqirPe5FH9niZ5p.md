---
schema: wang-person/v1
id: p_G6PYESGzqirPe5FH9niZ5p
status: active
merged_into: null
display_name: 王紹蘭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EXFHbzJBjYQFNvYYDotfeG
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SDhzb94hSUSL3mJDFi64SS
          claim_id: c_EXFHbzJBjYQFNvYYDotfeG
          source_id: s_VmDd9gpgvggHDcDRBnjxwH
          stance: supports
          locator: CBDB:57181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57181）
          source: &a1
            id: s_VmDd9gpgvggHDcDRBnjxwH
            source_type: api_record
            title: 中国历代人物传记资料库：王紹蘭（CBDB 57181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57181&o=json
            external_identifier: CBDB:57181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N8c2zzjapjF7t8J3Fay2js
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKfKTWT92sfRcZ1WUzK8GJ
          claim_id: c_N8c2zzjapjF7t8J3Fay2js
          source_id: s_VmDd9gpgvggHDcDRBnjxwH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_d4aLi3mJDhd9pj2zPEDbY6
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1yFWvgn8pcEr63sektK9e
          claim_id: c_d4aLi3mJDhd9pj2zPEDbY6
          source_id: s_VmDd9gpgvggHDcDRBnjxwH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V4wxDY13RKLXVUzDd6LmUN
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFzaqANVXkETo9MWJicjFE
          claim_id: c_V4wxDY13RKLXVUzDd6LmUN
          source_id: s_VmDd9gpgvggHDcDRBnjxwH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RCRcyxqnVRsEwW3594cpJF
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3EBS8HbhM3rQ4WGjjbGBpH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtWsAQiHvnAE1xwZap8fTK
          claim_id: c_RCRcyxqnVRsEwW3594cpJF
          source_id: s_FMpSJFdUa7wkaK1F6NJuzY
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），400：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FMpSJFdUa7wkaK1F6NJuzY
            source_type: api_record
            title: 中国历代人物传记资料库：王元壽（CBDB 514395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514395&o=json
            external_identifier: CBDB:514395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3EBS8HbhM3rQ4WGjjbGBpH
        status: active
        display_name: 王元壽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1U01KNjl36F7LKhVYKyij7
        subject_person_id: p_G6PYESGzqirPe5FH9niZ5p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CFXiDtDUgjcDDfBsUe3LVg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ewrlrG-nk3CkRv5JVd3bya
          claim_id: c_1U01KNjl36F7LKhVYKyij7
          source_id: s_8crMB97pPvKSrEEpyvCm6C
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），400：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8crMB97pPvKSrEEpyvCm6C
            source_type: api_record
            title: 中国历代人物传记资料库：王希范（CBDB 514396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514396&o=json
            external_identifier: CBDB:514396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CFXiDtDUgjcDDfBsUe3LVg
        status: active
        display_name: 王希范
        merged_into_person_id: null
  other: []
---

# 王紹蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹蘭 | accepted |
| birth.date | 1760年 | accepted |
| death.date | 1835年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3EBS8HbhM3rQ4WGjjbGBpH | 王元壽 | accepted |
| descendants | p_CFXiDtDUgjcDDfBsUe3LVg | 王希范 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹蘭（CBDB 57181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57181&o=json)
- [中国历代人物传记资料库：王希范（CBDB 514396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514396&o=json)
- [中国历代人物传记资料库：王元壽（CBDB 514395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514395&o=json)
