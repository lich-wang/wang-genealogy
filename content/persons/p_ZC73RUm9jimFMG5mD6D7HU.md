---
schema: wang-person/v1
id: p_ZC73RUm9jimFMG5mD6D7HU
status: active
merged_into: null
display_name: 王聲聞
cbdb_id: 121702
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HNGuihgv1V8z4J2dCGnKNm
        subject_person_id: p_ZC73RUm9jimFMG5mD6D7HU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲聞，史料所见人物。本项目依据《中国历代人物传记资料库：王聲聞（CBDB 121702）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_m1mBrXcc0mTxGZaFduyNJ_
          claim_id: c_HNGuihgv1V8z4J2dCGnKNm
          source_id: s_nPFfSWw2fL5G7ZAmK6gXBB
          stance: supports
          locator: CBDB:121702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nPFfSWw2fL5G7ZAmK6gXBB
            source_type: api_record
            title: 中国历代人物传记资料库：王聲聞（CBDB 121702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121702&o=json
            external_identifier: CBDB:121702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9uXELyM9uNqXHPTkTPM3R
        subject_person_id: p_ZC73RUm9jimFMG5mD6D7HU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲聞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jdqhVdTyVRB6JNHAv6cnA4
          claim_id: c_F9uXELyM9uNqXHPTkTPM3R
          source_id: s_nPFfSWw2fL5G7ZAmK6gXBB
          stance: supports
          locator: CBDB:121702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
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
  other:
    - claim:
        id: c_svIRuGCec9P9Q8GblbOryS
        subject_person_id: p_ZC73RUm9jimFMG5mD6D7HU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uym8ZYHMZML23NLgGPRY4p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLo1xKfKX70NOElS5dSH3j
          claim_id: c_svIRuGCec9P9Q8GblbOryS
          source_id: s_aRZp3iskSbWxLvu9cSogOM
          stance: supports
          locator: CBDB 亲属：妹（KinPerson 121699 王令聞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aRZp3iskSbWxLvu9cSogOM
            source_type: api_record
            title: 中国历代人物传记资料库：王聲聞（CBDB 121702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121702&o=json
            external_identifier: CBDB:121702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uym8ZYHMZML23NLgGPRY4p
        status: active
        display_name: 王令聞
        merged_into_person_id: null
---

# 王聲聞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聲聞，史料所见人物。本项目依据《中国历代人物传记资料库：王聲聞（CBDB 121702）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王聲聞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_uym8ZYHMZML23NLgGPRY4p | 王令聞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聲聞（CBDB 121702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121702&o=json)
