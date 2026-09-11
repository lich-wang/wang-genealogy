---
schema: wang-person/v1
id: p_SR35hfKXgc9UGvXjuXLUiG
status: active
merged_into: null
display_name: 王開
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_11AG2FK74kLM27vTwMMG9U
        subject_person_id: p_SR35hfKXgc9UGvXjuXLUiG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2G77PcVFNDK73wFq6oQhKh
          claim_id: c_11AG2FK74kLM27vTwMMG9U
          source_id: s_xA5TM5yFwXm4B7AKPpBQzz
          stance: supports
          locator: CBDB:146747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146747）
          source: &a1
            id: s_xA5TM5yFwXm4B7AKPpBQzz
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 146747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146747&o=json
            external_identifier: CBDB:146747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LkaUyo1aYD2gRqpCCyFYYB
        subject_person_id: p_SR35hfKXgc9UGvXjuXLUiG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開，南北朝人物。籍贯北市，曾任州司士参軍。（中国历代人物传记资料库 CBDB 146747）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HtnYOm8gFS1AQkd4dqNmmh
          claim_id: c_LkaUyo1aYD2gRqpCCyFYYB
          source_id: s_xA5TM5yFwXm4B7AKPpBQzz
          stance: supports
          locator: CBDB:146747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1vlb_KQQfrn81trAAqaP2w
        subject_person_id: p_SR35hfKXgc9UGvXjuXLUiG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v4jLy1JAE5C7khGgAfPcgB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xTxF5N6DIG90L_-0j43bg
          claim_id: c_1vlb_KQQfrn81trAAqaP2w
          source_id: s_xA5TM5yFwXm4B7AKPpBQzz
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 132：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v4jLy1JAE5C7khGgAfPcgB
        status: active
        display_name: 王才
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | 王開，南北朝人物。籍贯北市，曾任州司士参軍。（中国历代人物传记资料库 CBDB 146747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v4jLy1JAE5C7khGgAfPcgB | 王才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 146747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146747&o=json)
