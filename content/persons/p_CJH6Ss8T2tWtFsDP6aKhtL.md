---
schema: wang-person/v1
id: p_CJH6Ss8T2tWtFsDP6aKhtL
status: active
merged_into: null
display_name: 王鴻嶷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z871cpKSUWtrBo9eB5pM14
        subject_person_id: p_CJH6Ss8T2tWtFsDP6aKhtL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c9R3WEcEQY9BERDNGp7eWy
          claim_id: c_z871cpKSUWtrBo9eB5pM14
          source_id: s_8feMk5NUgrSbrTPgMgrfLV
          stance: supports
          locator: CBDB:551374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551374）
          source: &a1
            id: s_8feMk5NUgrSbrTPgMgrfLV
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻嶷（CBDB 551374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551374&o=json
            external_identifier: CBDB:551374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cs4SuP5Ddy6GC9FabSAjob
        subject_person_id: p_CJH6Ss8T2tWtFsDP6aKhtL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻嶷，史料所见人物。本项目依据《中国历代人物传记资料库：王鴻嶷（CBDB 551374）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cZeWxorkt78X8vwJ52CL47
          claim_id: c_Cs4SuP5Ddy6GC9FabSAjob
          source_id: s_8feMk5NUgrSbrTPgMgrfLV
          stance: supports
          locator: CBDB:551374
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
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5Pz4NJqwKpPdvfVnNj69Mo
        subject_person_id: p_CJH6Ss8T2tWtFsDP6aKhtL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zejs44LuymiypwVamtGNRP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jeSlmY7yIOF_uqWogRfrNQ
          claim_id: c_5Pz4NJqwKpPdvfVnNj69Mo
          source_id: s_lKFto6OY1CmFQ9xrSUJzyu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 551372 王鴻嵩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lKFto6OY1CmFQ9xrSUJzyu
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻嶷（CBDB 551374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551374&o=json
            external_identifier: CBDB:551374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zejs44LuymiypwVamtGNRP
        status: active
        display_name: 王鴻嵩
        merged_into_person_id: null
---

# 王鴻嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻嶷 | accepted |
| bio.summary | 王鴻嶷，史料所见人物。本项目依据《中国历代人物传记资料库：王鴻嶷（CBDB 551374）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_Zejs44LuymiypwVamtGNRP | 王鴻嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻嶷（CBDB 551374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551374&o=json)
