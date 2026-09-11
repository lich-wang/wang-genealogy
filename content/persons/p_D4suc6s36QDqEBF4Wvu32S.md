---
schema: wang-person/v1
id: p_D4suc6s36QDqEBF4Wvu32S
status: active
merged_into: null
display_name: 王嗣慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7GW4EAFsWHS4aTn5rb89N4
        subject_person_id: p_D4suc6s36QDqEBF4Wvu32S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E9oUTLLKCnQaWTt1HQrfTX
          claim_id: c_7GW4EAFsWHS4aTn5rb89N4
          source_id: s_KTMHs4p9av1BFZxbmEWY6K
          stance: supports
          locator: CBDB:696907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696907）
          source: &a1
            id: s_KTMHs4p9av1BFZxbmEWY6K
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣慶（CBDB 696907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696907&o=json
            external_identifier: CBDB:696907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FZHZJPL7g2Wrz27PAifDBQ
        subject_person_id: p_D4suc6s36QDqEBF4Wvu32S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣慶，宋人物。曾任推官。（中国历代人物传记资料库 CBDB 696907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GpTeLmO3LAfOJmxwj448uB
          claim_id: c_FZHZJPL7g2Wrz27PAifDBQ
          source_id: s_KTMHs4p9av1BFZxbmEWY6K
          stance: supports
          locator: CBDB:696907
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vnkN2yVruN3CgPdhRBkV2d
        subject_person_id: p_FXHwcoHY4AFBFWRSSNw52j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4suc6s36QDqEBF4Wvu32S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BnKw828kkqO3wuRto0ITj7
          claim_id: c_vnkN2yVruN3CgPdhRBkV2d
          source_id: s_KTMHs4p9av1BFZxbmEWY6K
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FXHwcoHY4AFBFWRSSNw52j
        status: active
        display_name: 王夢證
        merged_into_person_id: null
  children:
    - claim:
        id: c_Gn-okw_ImyxR8SdrEn-HQk
        subject_person_id: p_D4suc6s36QDqEBF4Wvu32S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cIw23OiVHouvXq9BverN_A
          claim_id: c_Gn-okw_ImyxR8SdrEn-HQk
          source_id: s_KTMHs4p9av1BFZxbmEWY6K
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣慶 | accepted |
| bio.summary | 王嗣慶，宋人物。曾任推官。（中国历代人物传记资料库 CBDB 696907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FXHwcoHY4AFBFWRSSNw52j | 王夢證 | accepted |
| children | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣慶（CBDB 696907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696907&o=json)
