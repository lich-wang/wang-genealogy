---
schema: wang-person/v1
id: p_5GoCZ6LMqwnyLpJJPbTAtp
status: active
merged_into: null
display_name: 王溉槐
cbdb_id: 235464
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6BAjqFGXG36pcm5CMw2q5
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉槐，明人物。籍贯東光，入仕庠生。（中国历代人物传记资料库 CBDB 235464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ksKc-8MdtcNv65wKJlP-1O
          claim_id: c_R6BAjqFGXG36pcm5CMw2q5
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: CBDB:235464
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QXYD7rdXyT5aDJJeaSJ1rk
            source_type: api_record
            title: 中国历代人物传记资料库：王溉槐（CBDB 235464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json
            external_identifier: CBDB:235464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qUN28cVgPMGShUNxwhVMy2
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溉槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jF9ECza9AMRBF42CmeZ3gv
          claim_id: c_qUN28cVgPMGShUNxwhVMy2
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: CBDB:235464
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_v-XTN3ch9jdsQv9VHpFv75
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nrWO6LdgFaxTHiTDcSx3So
          claim_id: c_v-XTN3ch9jdsQv9VHpFv75
          source_id: s_QXYD7rdXyT5aDJJeaSJ1rk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百二十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QXYD7rdXyT5aDJJeaSJ1rk
            source_type: api_record
            title: 中国历代人物传记资料库：王溉槐（CBDB 235464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json
            external_identifier: CBDB:235464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溉槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王溉槐，明人物。籍贯東光，入仕庠生。（中国历代人物传记资料库 CBDB 235464） | accepted |
| name.primary | 王溉槐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溉槐（CBDB 235464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235464&o=json)
