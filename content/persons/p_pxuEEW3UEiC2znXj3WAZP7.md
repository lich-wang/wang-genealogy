---
schema: wang-person/v1
id: p_pxuEEW3UEiC2znXj3WAZP7
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PAJCibMBiPFLXrQ2pMdYw8
        subject_person_id: p_pxuEEW3UEiC2znXj3WAZP7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EHH8E42C3taLLZiQ1rU1RD
          claim_id: c_PAJCibMBiPFLXrQ2pMdYw8
          source_id: s_aoRc3e1Z6kmWc3HUKQCJGS
          stance: supports
          locator: CBDB:220839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220839）
          source: &a1
            id: s_aoRc3e1Z6kmWc3HUKQCJGS
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 220839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220839&o=json
            external_identifier: CBDB:220839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xBFX5FrtyEsP9EEYyd7N4g
        subject_person_id: p_pxuEEW3UEiC2znXj3WAZP7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，明人物。萬曆八年進士，籍贯德平。（中国历代人物传记资料库 CBDB 220839）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ogRdguMW2oQ47W7qtx77MF
          claim_id: c_xBFX5FrtyEsP9EEYyd7N4g
          source_id: s_aoRc3e1Z6kmWc3HUKQCJGS
          stance: supports
          locator: CBDB:220839
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uQ_VDjgZeHx3yFSgAyrBhn
        subject_person_id: p_pxuEEW3UEiC2znXj3WAZP7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpfolOVgQbvpkurWt5BU1D
          claim_id: c_uQ_VDjgZeHx3yFSgAyrBhn
          source_id: s_aoRc3e1Z6kmWc3HUKQCJGS
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DxMro6Z24bPYtmEPhHPt4K
        status: active
        display_name: 王麟趾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，明人物。萬曆八年進士，籍贯德平。（中国历代人物传记资料库 CBDB 220839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DxMro6Z24bPYtmEPhHPt4K | 王麟趾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 220839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220839&o=json)
