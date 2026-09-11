---
schema: wang-person/v1
id: p_5SW2XZEUskW8LpQAGTNC8h
status: active
merged_into: null
display_name: 王日信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mph1K8LuMGUMbrNdjgiJ92
        subject_person_id: p_5SW2XZEUskW8LpQAGTNC8h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rQPRKkEnLwvNNGrQcveSa2
          claim_id: c_Mph1K8LuMGUMbrNdjgiJ92
          source_id: s_PHtb29zNH4kt73NrybWZZm
          stance: supports
          locator: CBDB:191160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191160）
          source: &a1
            id: s_PHtb29zNH4kt73NrybWZZm
            source_type: api_record
            title: 中国历代人物传记资料库：王日信（CBDB 191160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191160&o=json
            external_identifier: CBDB:191160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QHHJVxxhD4ZQQ3JGE5jCMc
        subject_person_id: p_5SW2XZEUskW8LpQAGTNC8h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AL8AGxEWvG57NsVCd5FgJ2
          claim_id: c_QHHJVxxhD4ZQQ3JGE5jCMc
          source_id: s_PHtb29zNH4kt73NrybWZZm
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
        id: c_GjqH6nL6Q6Ty7BnKMA9Koi
        subject_person_id: p_5SW2XZEUskW8LpQAGTNC8h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日信（卒于859年），史料所见人物。本项目依据《中国历代人物传记资料库：王日信（CBDB 191160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kE2FEPj1YD_Ee5I2PJf5Cl
          claim_id: c_GjqH6nL6Q6Ty7BnKMA9Koi
          source_id: s_PHtb29zNH4kt73NrybWZZm
          stance: supports
          locator: CBDB:191160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V4K1IAeNXlZB4JHjkBjqkh
        subject_person_id: p_LPxCbHVHyT4kwZF5i6X5Mr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5SW2XZEUskW8LpQAGTNC8h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPYjXE-JDQ_8baQgzsO19e
          claim_id: c_V4K1IAeNXlZB4JHjkBjqkh
          source_id: s_PHtb29zNH4kt73NrybWZZm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPxCbHVHyT4kwZF5i6X5Mr
        status: active
        display_name: 王緒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王日信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日信 | accepted |
| death.date | 859年 | accepted |
| bio.summary | 王日信（卒于859年），史料所见人物。本项目依据《中国历代人物传记资料库：王日信（CBDB 191160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LPxCbHVHyT4kwZF5i6X5Mr | 王緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日信（CBDB 191160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191160&o=json)
