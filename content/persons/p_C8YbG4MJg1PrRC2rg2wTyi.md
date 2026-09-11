---
schema: wang-person/v1
id: p_C8YbG4MJg1PrRC2rg2wTyi
status: active
merged_into: null
display_name: 王邦直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrP9HvU6DuRoAXwAnRuhyJ
        subject_person_id: p_C8YbG4MJg1PrRC2rg2wTyi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_49rqZDaerN9K1CAL2PkdM5
          claim_id: c_YrP9HvU6DuRoAXwAnRuhyJ
          source_id: s_qRhHrFVu57tjoD5HKarB1c
          stance: supports
          locator: CBDB:126554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126554）
          source: &a1
            id: s_qRhHrFVu57tjoD5HKarB1c
            source_type: api_record
            title: 中国历代人物传记资料库：王邦直（CBDB 126554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126554&o=json
            external_identifier: CBDB:126554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yV54XBr5zeyiL83phNqREV
        subject_person_id: p_C8YbG4MJg1PrRC2rg2wTyi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直，明人物。籍贯磁州，身份为精於騎射。（中国历代人物传记资料库 CBDB 126554）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VU2tX7VFv_Wm70YmtpKOlo
          claim_id: c_yV54XBr5zeyiL83phNqREV
          source_id: s_qRhHrFVu57tjoD5HKarB1c
          stance: supports
          locator: CBDB:126554
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

# 王邦直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦直 | accepted |
| bio.summary | 王邦直，明人物。籍贯磁州，身份为精於騎射。（中国历代人物传记资料库 CBDB 126554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦直（CBDB 126554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126554&o=json)
