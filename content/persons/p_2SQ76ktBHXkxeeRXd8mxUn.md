---
schema: wang-person/v1
id: p_2SQ76ktBHXkxeeRXd8mxUn
status: active
merged_into: null
display_name: 王簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PUir4MKaXfaKkeJJKTrSSn
        subject_person_id: p_2SQ76ktBHXkxeeRXd8mxUn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h5QQZMQKmNv997PgbAeSGi
          claim_id: c_PUir4MKaXfaKkeJJKTrSSn
          source_id: s_tbFJS7da43jMq17gKvUMTm
          stance: supports
          locator: CBDB:222532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222532）
          source: &a1
            id: s_tbFJS7da43jMq17gKvUMTm
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 222532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222532&o=json
            external_identifier: CBDB:222532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n5opqKj6uz5ZwDvkaoLTZ2
        subject_person_id: p_2SQ76ktBHXkxeeRXd8mxUn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，明人物。萬曆十一年進士，曾任兵部主事。（中国历代人物传记资料库 CBDB 222532）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qS-4UlwGXHMkgvA9ZYZ929
          claim_id: c_n5opqKj6uz5ZwDvkaoLTZ2
          source_id: s_tbFJS7da43jMq17gKvUMTm
          stance: supports
          locator: CBDB:222532
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
        id: c_Jxhv-KXfMXdnVCYJS0GK9X
        subject_person_id: p_2SQ76ktBHXkxeeRXd8mxUn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwqvGdAMjwbUXHE11pEIdS
          claim_id: c_Jxhv-KXfMXdnVCYJS0GK9X
          source_id: s_tbFJS7da43jMq17gKvUMTm
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RKkqJtmY8xpK68H9TU7V2h
        status: active
        display_name: 王岳錫
        merged_into_person_id: null
  other: []
---

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，明人物。萬曆十一年進士，曾任兵部主事。（中国历代人物传记资料库 CBDB 222532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RKkqJtmY8xpK68H9TU7V2h | 王岳錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 222532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222532&o=json)
