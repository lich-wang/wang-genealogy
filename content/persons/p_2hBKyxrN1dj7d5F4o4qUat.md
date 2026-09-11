---
schema: wang-person/v1
id: p_2hBKyxrN1dj7d5F4o4qUat
status: active
merged_into: null
display_name: 王達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VX1w3e3gKsEtVLnNrQ1aSK
        subject_person_id: p_2hBKyxrN1dj7d5F4o4qUat
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rUzfupypeCsXCSZmpuXXHe
          claim_id: c_VX1w3e3gKsEtVLnNrQ1aSK
          source_id: s_P7CoYMX4u35GG1LGj3vDJN
          stance: supports
          locator: CBDB:291878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291878）
          source: &a1
            id: s_P7CoYMX4u35GG1LGj3vDJN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 291878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json
            external_identifier: CBDB:291878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MQEdSQrbjDm86FdDRpBEW
        subject_person_id: p_2hBKyxrN1dj7d5F4o4qUat
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。嘉靖十一年進士，曾任知府。（中国历代人物传记资料库 CBDB 291878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zk7LM3pqMr_9NGN3pshgEB
          claim_id: c_8MQEdSQrbjDm86FdDRpBEW
          source_id: s_P7CoYMX4u35GG1LGj3vDJN
          stance: supports
          locator: CBDB:291878
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
        id: c_CBknzOnpJeVWavIbP9Rl2k
        subject_person_id: p_2hBKyxrN1dj7d5F4o4qUat
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n97VSOGe9qMcddxJeNSj_Q
          claim_id: c_CBknzOnpJeVWavIbP9Rl2k
          source_id: s_P7CoYMX4u35GG1LGj3vDJN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  other: []
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。嘉靖十一年進士，曾任知府。（中国历代人物传记资料库 CBDB 291878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 291878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json)
