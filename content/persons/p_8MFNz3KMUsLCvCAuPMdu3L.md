---
schema: wang-person/v1
id: p_8MFNz3KMUsLCvCAuPMdu3L
status: active
merged_into: null
display_name: 閻氏
revision: 1
cbdb_id: 163029
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5XFtdn3LIy-NfCPJNE33G3
        subject_person_id: p_8MFNz3KMUsLCvCAuPMdu3L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 閻氏，史料所见人物。本项目依据《中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2Q_9Vbwb1y3WkML_MPJTP
          claim_id: c_5XFtdn3LIy-NfCPJNE33G3
          source_id: s_TNWz_8krJqEYGUWNblsFng
          stance: supports
          locator: CBDB:163029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TNWz_8krJqEYGUWNblsFng
            source_type: api_record
            title: 中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163029&o=json
            external_identifier: CBDB:163029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbrYnF88kn0gR0FQFk6_Ct
        subject_person_id: p_8MFNz3KMUsLCvCAuPMdu3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 閻氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CXPS24IaShSUT79gPUpGoQ
          claim_id: c_hbrYnF88kn0gR0FQFk6_Ct
          source_id: s_TNWz_8krJqEYGUWNblsFng
          stance: supports
          locator: CBDB:163029
          quotation: null
          interpretation_note: CBDB 明确记录的王漢配偶
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
        id: c_LqYWl7UH9yQ2LTtLbBMjiL
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8MFNz3KMUsLCvCAuPMdu3L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uc-sRUWK8QovRCnMg8L6CW
          claim_id: c_LqYWl7UH9yQ2LTtLbBMjiL
          source_id: s_TNWz_8krJqEYGUWNblsFng
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianshou11：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ia1bQxRQmGNRbafUSNHBHb
        status: active
        display_name: 王漢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 閻氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 閻氏，史料所见人物。本项目依据《中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 閻氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ia1bQxRQmGNRbafUSNHBHb | 王漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163029&o=json)
