---
schema: wang-person/v1
id: p_4K6CbpgcT5TowC24d9AA7r
status: active
merged_into: null
display_name: 王存
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WZ7nkX5Pru4Jr1ajarFXam
        subject_person_id: p_4K6CbpgcT5TowC24d9AA7r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ARDM5bqwCWkJVpKjtD9Ckn
          claim_id: c_WZ7nkX5Pru4Jr1ajarFXam
          source_id: s_1sgvrTxEkY3JC3jDALrEen
          stance: supports
          locator: CBDB:155793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155793）
          source: &a1
            id: s_1sgvrTxEkY3JC3jDALrEen
            source_type: api_record
            title: 中国历代人物传记资料库：王存（CBDB 155793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155793&o=json
            external_identifier: CBDB:155793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZH87z3dYNs16WkF7A75U3e
        subject_person_id: p_4K6CbpgcT5TowC24d9AA7r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存，史料所见人物。本项目依据《中国历代人物传记资料库：王存（CBDB 155793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jxRPU086gM-j3-4pSymCE2
          claim_id: c_ZH87z3dYNs16WkF7A75U3e
          source_id: s_1sgvrTxEkY3JC3jDALrEen
          stance: supports
          locator: CBDB:155793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jHWMVCa3NQT_wl3uEN3cYa
        subject_person_id: p_R1RF133N5mwNT6YsnkkDcE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4K6CbpgcT5TowC24d9AA7r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ecaG3qH23oRmmjtViTHXA
          claim_id: c_jHWMVCa3NQT_wl3uEN3cYa
          source_id: s_1sgvrTxEkY3JC3jDALrEen
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 76：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R1RF133N5mwNT6YsnkkDcE
        status: active
        display_name: 王仲堪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存 | accepted |
| bio.summary | 王存，史料所见人物。本项目依据《中国历代人物传记资料库：王存（CBDB 155793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R1RF133N5mwNT6YsnkkDcE | 王仲堪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存（CBDB 155793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155793&o=json)
