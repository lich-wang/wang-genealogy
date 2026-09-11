---
schema: wang-person/v1
id: p_LxJ4vJLT5hbogHuvPW9rPN
status: active
merged_into: null
display_name: 王材振
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bgQqD2rBf8Z7wUb1uVihG6
        subject_person_id: p_LxJ4vJLT5hbogHuvPW9rPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材振
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aHTrqiLH3C4pJDahs222YL
          claim_id: c_bgQqD2rBf8Z7wUb1uVihG6
          source_id: s_68U3ZQ9MCkbRWVzdJYKcQ5
          stance: supports
          locator: CBDB:527018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527018）
          source: &a1
            id: s_68U3ZQ9MCkbRWVzdJYKcQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王材振（CBDB 527018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527018&o=json
            external_identifier: CBDB:527018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8ELVp7YDnALERTKhTh22h
        subject_person_id: p_LxJ4vJLT5hbogHuvPW9rPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材振，史料所见人物。本项目依据《中国历代人物传记资料库：王材振（CBDB 527018）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y3LaBsPefPJt20Gzeo2Ui1
          claim_id: c_q8ELVp7YDnALERTKhTh22h
          source_id: s_68U3ZQ9MCkbRWVzdJYKcQ5
          stance: supports
          locator: CBDB:527018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iB-zRAon3oC58Mvt0N1Qgo
        subject_person_id: p_zjQMXTGNWTchLi9wmdCnEK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LxJ4vJLT5hbogHuvPW9rPN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FPdjz7EifmEmvbUSrbEGLs
          claim_id: c_iB-zRAon3oC58Mvt0N1Qgo
          source_id: s_68U3ZQ9MCkbRWVzdJYKcQ5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13179：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zjQMXTGNWTchLi9wmdCnEK
        status: active
        display_name: 王澤宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王材振

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材振 | accepted |
| bio.summary | 王材振，史料所见人物。本项目依据《中国历代人物传记资料库：王材振（CBDB 527018）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zjQMXTGNWTchLi9wmdCnEK | 王澤宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材振（CBDB 527018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527018&o=json)
