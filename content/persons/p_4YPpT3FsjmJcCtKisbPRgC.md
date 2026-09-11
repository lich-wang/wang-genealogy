---
schema: wang-person/v1
id: p_4YPpT3FsjmJcCtKisbPRgC
status: active
merged_into: null
display_name: 王啟茹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tQBLc7HjdxYQFreE6BKZLT
        subject_person_id: p_4YPpT3FsjmJcCtKisbPRgC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟茹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mUVhsDc2s5vbMuBYMhbYJh
          claim_id: c_tQBLc7HjdxYQFreE6BKZLT
          source_id: s_pKZFFUNYBmdKakzT1qRTtP
          stance: supports
          locator: CBDB:551391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551391）
          source: &a1
            id: s_pKZFFUNYBmdKakzT1qRTtP
            source_type: api_record
            title: 中国历代人物传记资料库：王啟茹（CBDB 551391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551391&o=json
            external_identifier: CBDB:551391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dxnLRdJ7UGBKX7xEtTi6HX
        subject_person_id: p_4YPpT3FsjmJcCtKisbPRgC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟茹，清人物。籍贯仁和，入仕庠生。（中国历代人物传记资料库 CBDB 551391）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uO4Z6dsKXEFlNx_-dSV2Fp
          claim_id: c_dxnLRdJ7UGBKX7xEtTi6HX
          source_id: s_pKZFFUNYBmdKakzT1qRTtP
          stance: supports
          locator: CBDB:551391
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wdGJTxjWEJOqw5XEKzc2yX
        subject_person_id: p_gPG8QG52N3Yy4R76LFMbm4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4YPpT3FsjmJcCtKisbPRgC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHbc3lGmi7PSmeFjmc6XD3
          claim_id: c_wdGJTxjWEJOqw5XEKzc2yX
          source_id: s_pKZFFUNYBmdKakzT1qRTtP
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160562：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gPG8QG52N3Yy4R76LFMbm4
        status: active
        display_name: 王祺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟茹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟茹 | accepted |
| bio.summary | 王啟茹，清人物。籍贯仁和，入仕庠生。（中国历代人物传记资料库 CBDB 551391） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gPG8QG52N3Yy4R76LFMbm4 | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟茹（CBDB 551391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551391&o=json)
