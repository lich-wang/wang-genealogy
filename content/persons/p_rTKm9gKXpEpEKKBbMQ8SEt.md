---
schema: wang-person/v1
id: p_rTKm9gKXpEpEKKBbMQ8SEt
status: active
merged_into: null
display_name: 王惟贊
cbdb_id: 159959
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BeNZhCqjbnLs9mhymXtkTP
        subject_person_id: p_rTKm9gKXpEpEKKBbMQ8SEt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟贊，史料所见人物。本项目依据《中国历代人物传记资料库：王惟贊（CBDB 159959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zzrSL9FLKVSc_b51E41xk9
          claim_id: c_BeNZhCqjbnLs9mhymXtkTP
          source_id: s_ZX815QH7Rioi5BaJK3J4oU
          stance: supports
          locator: CBDB:159959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZX815QH7Rioi5BaJK3J4oU
            source_type: api_record
            title: 中国历代人物传记资料库：王惟贊（CBDB 159959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159959&o=json
            external_identifier: CBDB:159959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wL2D4NhHBpyLC6P1xACinn
        subject_person_id: p_rTKm9gKXpEpEKKBbMQ8SEt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VuSGBZH5gv53zfpCWfZpnL
          claim_id: c_wL2D4NhHBpyLC6P1xACinn
          source_id: s_ZX815QH7Rioi5BaJK3J4oU
          stance: supports
          locator: CBDB:159959
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QMefSgUmg8VETnZZtoc4mS
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rTKm9gKXpEpEKKBbMQ8SEt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AjH3-jfrTmlDnalXxr7ptI
          claim_id: c_QMefSgUmg8VETnZZtoc4mS
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buHPPD7o3Zg7opBbsnKMQ6
        status: active
        display_name: 王公素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟贊，史料所见人物。本项目依据《中国历代人物传记资料库：王惟贊（CBDB 159959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王惟贊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_buHPPD7o3Zg7opBbsnKMQ6 | 王公素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
- [中国历代人物传记资料库：王惟贊（CBDB 159959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159959&o=json)
