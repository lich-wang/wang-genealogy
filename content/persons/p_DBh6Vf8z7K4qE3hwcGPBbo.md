---
schema: wang-person/v1
id: p_DBh6Vf8z7K4qE3hwcGPBbo
status: active
merged_into: null
display_name: 王萃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_znxvKb7FNphmVUkiF9vMF2
        subject_person_id: p_DBh6Vf8z7K4qE3hwcGPBbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YyGTTXSwzk6DYFvT8AepLr
          claim_id: c_znxvKb7FNphmVUkiF9vMF2
          source_id: s_ygSK85SQ5KK3Y5yAwK2z41
          stance: supports
          locator: CBDB:155342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155342）
          source: &a1
            id: s_ygSK85SQ5KK3Y5yAwK2z41
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 155342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155342&o=json
            external_identifier: CBDB:155342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMCbsANFyzmEGpVCN4SqXt
        subject_person_id: p_DBh6Vf8z7K4qE3hwcGPBbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃，史料所见人物。本项目依据《中国历代人物传记资料库：王萃（CBDB 155342）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_peZPGktDkbaPg270Z4c3bh
          claim_id: c_SMCbsANFyzmEGpVCN4SqXt
          source_id: s_ygSK85SQ5KK3Y5yAwK2z41
          stance: supports
          locator: CBDB:155342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__YUh1ddq5fet1E8frligmb
        subject_person_id: p_si2kM1cTkuZYqxLyr1N7Wh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DBh6Vf8z7K4qE3hwcGPBbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zZ8_pz_E08bCaiW_rG5T-
          claim_id: c__YUh1ddq5fet1E8frligmb
          source_id: s_ygSK85SQ5KK3Y5yAwK2z41
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jianzhong 14：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_si2kM1cTkuZYqxLyr1N7Wh
        status: active
        display_name: 王士林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萃 | accepted |
| bio.summary | 王萃，史料所见人物。本项目依据《中国历代人物传记资料库：王萃（CBDB 155342）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_si2kM1cTkuZYqxLyr1N7Wh | 王士林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萃（CBDB 155342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155342&o=json)
