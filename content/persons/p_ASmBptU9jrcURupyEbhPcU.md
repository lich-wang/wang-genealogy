---
schema: wang-person/v1
id: p_ASmBptU9jrcURupyEbhPcU
status: active
merged_into: null
display_name: 王文晟
cbdb_id: 37963
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sTotpGWjgUmZVkRZ1boLVR
        subject_person_id: p_ASmBptU9jrcURupyEbhPcU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文晟，史料所见人物。本项目依据《中国历代人物传记资料库：王文晟（CBDB 37963）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_PPnEXelSeeYPWaIdysKHIi
          claim_id: c_sTotpGWjgUmZVkRZ1boLVR
          source_id: s_DRPMtn8HoLiVag81md5fBp
          stance: supports
          locator: CBDB:37963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_DRPMtn8HoLiVag81md5fBp
            source_type: api_record
            title: 中国历代人物传记资料库：王文晟（CBDB 37963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37963&o=json
            external_identifier: CBDB:37963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQmqA3F1CgsbXfRCooKLxX
        subject_person_id: p_ASmBptU9jrcURupyEbhPcU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_W4PEA42zhLjEP87iGSxCdS
          claim_id: c_KQmqA3F1CgsbXfRCooKLxX
          source_id: s_DRPMtn8HoLiVag81md5fBp
          stance: supports
          locator: CBDB:37963
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3jAiSQYIvC22-bSuAY0Ewi
        subject_person_id: p_PnGbaR3xqVcNi2dVtZs5vp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ASmBptU9jrcURupyEbhPcU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9vWhrWPbcNMAn8tf0HE_tj
          claim_id: c_3jAiSQYIvC22-bSuAY0Ewi
          source_id: s_DRPMtn8HoLiVag81md5fBp
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DRPMtn8HoLiVag81md5fBp
            source_type: api_record
            title: 中国历代人物传记资料库：王文晟（CBDB 37963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37963&o=json
            external_identifier: CBDB:37963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PnGbaR3xqVcNi2dVtZs5vp
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文晟，史料所见人物。本项目依据《中国历代人物传记资料库：王文晟（CBDB 37963）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王文晟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PnGbaR3xqVcNi2dVtZs5vp | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文晟（CBDB 37963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37963&o=json)
