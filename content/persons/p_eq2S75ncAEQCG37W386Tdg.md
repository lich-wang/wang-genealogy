---
schema: wang-person/v1
id: p_eq2S75ncAEQCG37W386Tdg
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 571647
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-dDWjaxKwlFAjg1nEBkYgY
        subject_person_id: p_eq2S75ncAEQCG37W386Tdg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gx6UJAqEJLRkkfRfpp7X9
          claim_id: c_-dDWjaxKwlFAjg1nEBkYgY
          source_id: s_55mynRwzSXqR0UUf7vFTFj
          stance: supports
          locator: CBDB:571647
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_55mynRwzSXqR0UUf7vFTFj
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571647&o=json
            external_identifier: CBDB:571647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W2ZuZev55w6-sN1Y9sPQZX
        subject_person_id: p_eq2S75ncAEQCG37W386Tdg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e03m4RVP0XzcLwE9r9AkWU
          claim_id: c_W2ZuZev55w6-sN1Y9sPQZX
          source_id: s_55mynRwzSXqR0UUf7vFTFj
          stance: supports
          locator: CBDB:571647
          quotation: null
          interpretation_note: CBDB 明确记录的王與安配偶
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
        id: c_g7ozE-wzwincckgmIfB_Mk
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eq2S75ncAEQCG37W386Tdg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kl9YuJYu5Gm05jglWWBDTp
          claim_id: c_g7ozE-wzwincckgmIfB_Mk
          source_id: s_55mynRwzSXqR0UUf7vFTFj
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fqahu1Tzm7wuLSu7e9txiu
        status: active
        display_name: 王與安
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，史料所见人物。本项目依据《中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Fqahu1Tzm7wuLSu7e9txiu | 王與安 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王與安妻)（CBDB 571647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571647&o=json)
