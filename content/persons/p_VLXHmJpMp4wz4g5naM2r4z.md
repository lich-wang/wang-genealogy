---
schema: wang-person/v1
id: p_VLXHmJpMp4wz4g5naM2r4z
status: active
merged_into: null
display_name: 王密
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eM8p53rYvxETLPF9gFCEdG
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xojeij5vNUo7E22TMH3NWu
          claim_id: c_eM8p53rYvxETLPF9gFCEdG
          source_id: s_STwMwE7heahqrujmFTvwjM
          stance: supports
          locator: CBDB:304271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304271）
          source: &a1
            id: s_STwMwE7heahqrujmFTvwjM
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 304271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json
            external_identifier: CBDB:304271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N22uDXphBVco68Xf4na1en
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304271）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1baniVTBwU9LvmsllvZ-J4
          claim_id: c_N22uDXphBVco68Xf4na1en
          source_id: s_STwMwE7heahqrujmFTvwjM
          stance: supports
          locator: CBDB:304271
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Pj6W507Y1Kc_25tHEg9QLs
        subject_person_id: p_VLXHmJpMp4wz4g5naM2r4z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zj3UcaT47HKJJeLDFk6H7j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s1KvqaaRdLOaIamw4NJPVd
          claim_id: c_Pj6W507Y1Kc_25tHEg9QLs
          source_id: s_STwMwE7heahqrujmFTvwjM
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zj3UcaT47HKJJeLDFk6H7j
        status: active
        display_name: 王應鍾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| bio.summary | 王密，明人物。嘉靖二十年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 304271） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zj3UcaT47HKJJeLDFk6H7j | 王應鍾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王密（CBDB 304271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304271&o=json)
