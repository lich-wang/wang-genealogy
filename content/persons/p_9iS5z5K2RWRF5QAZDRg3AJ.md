---
schema: wang-person/v1
id: p_9iS5z5K2RWRF5QAZDRg3AJ
status: active
merged_into: null
display_name: 王鑰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_akudeDRd8rUPa3yQQKL39F
        subject_person_id: p_9iS5z5K2RWRF5QAZDRg3AJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_crKHEFFaxEiPnaYE27SAjx
          claim_id: c_akudeDRd8rUPa3yQQKL39F
          source_id: s_rLCwqD9oTky6DHGpRR1MGp
          stance: supports
          locator: CBDB:219253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219253）
          source: &a1
            id: s_rLCwqD9oTky6DHGpRR1MGp
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 219253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219253&o=json
            external_identifier: CBDB:219253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R2Yhoev8uQEYC4JwVdeNA5
        subject_person_id: p_9iS5z5K2RWRF5QAZDRg3AJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。萬曆八年進士，曾任訓導。（中国历代人物传记资料库 CBDB 219253）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fJ41kH44DrWh5oMJtV9tL9
          claim_id: c_R2Yhoev8uQEYC4JwVdeNA5
          source_id: s_rLCwqD9oTky6DHGpRR1MGp
          stance: supports
          locator: CBDB:219253
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_WsxmjPdoAWbLrtlLoV7ZbM
        subject_person_id: p_9iS5z5K2RWRF5QAZDRg3AJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mhrvputkBEQ43wY64CJw5k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8SE9X7zxvcybOpAxAaFoT
          claim_id: c_WsxmjPdoAWbLrtlLoV7ZbM
          source_id: s_rLCwqD9oTky6DHGpRR1MGp
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mhrvputkBEQ43wY64CJw5k
        status: active
        display_name: 王乾亨
        merged_into_person_id: null
  other: []
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。萬曆八年進士，曾任訓導。（中国历代人物传记资料库 CBDB 219253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mhrvputkBEQ43wY64CJw5k | 王乾亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 219253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219253&o=json)
