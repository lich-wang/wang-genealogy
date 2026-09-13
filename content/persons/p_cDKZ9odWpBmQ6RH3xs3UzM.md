---
schema: wang-person/v1
id: p_cDKZ9odWpBmQ6RH3xs3UzM
status: active
merged_into: null
display_name: 王勗
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6xz42CBy7Spsh6RP84WEZ
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tbhCQM2ecffKpV5uL6sEHZ
          claim_id: c_T6xz42CBy7Spsh6RP84WEZ
          source_id: s_kud9tGDRR8FuSL6PST6CwA
          stance: supports
          locator: CBDB:151255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151255）
          source: &a1
            id: s_kud9tGDRR8FuSL6PST6CwA
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 151255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json
            external_identifier: CBDB:151255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjyiMUeYUz6ab4uiQx63jG
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗，史料所见人物。本项目依据《中国历代人物传记资料库：王勗（CBDB 151255）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XFm1oyUTfyYTRE5gRVNalg
          claim_id: c_SjyiMUeYUz6ab4uiQx63jG
          source_id: s_kud9tGDRR8FuSL6PST6CwA
          stance: supports
          locator: CBDB:151255
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
        id: c_v4UPffzJexAi1Evpr_mY4Q
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSiYIY20t8iyeo3Y_fIUkA
          claim_id: c_v4UPffzJexAi1Evpr_mY4Q
          source_id: s_kud9tGDRR8FuSL6PST6CwA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 47：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YJUfQmozBnpgzDZHV6jrGh
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王勗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勗 | accepted |
| bio.summary | 王勗，史料所见人物。本项目依据《中国历代人物传记资料库：王勗（CBDB 151255）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YJUfQmozBnpgzDZHV6jrGh | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勗（CBDB 151255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json)
