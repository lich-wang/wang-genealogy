---
schema: wang-person/v1
id: p_MBqZE3RmJF1sQrWuAHSJpp
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7sFyZkwzcDaM6WMeNTKwB1
        subject_person_id: p_MBqZE3RmJF1sQrWuAHSJpp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baii7QrHYSMC5H4Kc3RE5S
          claim_id: c_7sFyZkwzcDaM6WMeNTKwB1
          source_id: s_xBHBrvQJAUP2myih7wGfUQ
          stance: supports
          locator: CBDB:146848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146848）
          source: &a1
            id: s_xBHBrvQJAUP2myih7wGfUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 146848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146848&o=json
            external_identifier: CBDB:146848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6NPGC4JpciZb3CiZhAx4x1
        subject_person_id: p_MBqZE3RmJF1sQrWuAHSJpp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，史料所见人物。本项目依据《中国历代人物传记资料库：王玉（CBDB 146848）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1sJT4Y5cEtsjHZND7lBhId
          claim_id: c_6NPGC4JpciZb3CiZhAx4x1
          source_id: s_xBHBrvQJAUP2myih7wGfUQ
          stance: supports
          locator: CBDB:146848
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ovQsy-sUMeu6eL3Xtfig1S
        subject_person_id: p_MBqZE3RmJF1sQrWuAHSJpp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sY7UcEtC2LisndkbMnKtdg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pq4urIdnplZhDczD1p4rHI
          claim_id: c_ovQsy-sUMeu6eL3Xtfig1S
          source_id: s_jBsWSJM0xmpMl1EpSYjMI6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 166：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jBsWSJM0xmpMl1EpSYjMI6
            source_type: api_record
            title: 中国历代人物传记资料库：薛朗（CBDB 138880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138880&o=json
            external_identifier: CBDB:138880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sY7UcEtC2LisndkbMnKtdg
        status: active
        display_name: 薛朗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，史料所见人物。本项目依据《中国历代人物传记资料库：王玉（CBDB 146848）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sY7UcEtC2LisndkbMnKtdg | 薛朗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉（CBDB 146848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146848&o=json)
- [中国历代人物传记资料库：薛朗（CBDB 138880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138880&o=json)
