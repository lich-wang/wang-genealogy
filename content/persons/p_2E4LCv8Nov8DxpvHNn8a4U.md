---
schema: wang-person/v1
id: p_2E4LCv8Nov8DxpvHNn8a4U
status: active
merged_into: null
display_name: 王景文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2mEQctRw2XwR9HhL9xj33
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DGX3G8k6CrXP6j9C3MVubV
          claim_id: c_Y2mEQctRw2XwR9HhL9xj33
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: CBDB:23216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23216）
          source: &a1
            id: s_yujo92cz27U8dwZherbwgg
            source_type: api_record
            title: 中国历代人物传记资料库：王景文（CBDB 23216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23216&o=json
            external_identifier: CBDB:23216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nymx5TZ8NS5wc7nPCrETEE
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1083年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dizxe6i47ifHyPjdESz6RC
          claim_id: c_Nymx5TZ8NS5wc7nPCrETEE
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1mJPvJAXY83xboNnb43Tzb
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1140年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GVFcJA4KCZXC4uNXJ4U1FB
          claim_id: c_1mJPvJAXY83xboNnb43Tzb
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lb1sAdqAnpcBDp958KDQPV
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MrxBpuqNuF4vEEDiFC5yC
          claim_id: c_Lb1sAdqAnpcBDp958KDQPV
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gHkOnU5zL6iD-bgbAjE5a0
        subject_person_id: p_5MKKK3FSS4K8A2mwT7eocH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9v2vMZiQyEioB8_FzhVgbJ
          claim_id: c_gHkOnU5zL6iD-bgbAjE5a0
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: CBDB 双向互证（父 王常 ⇄ 子 王景文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_5MKKK3FSS4K8A2mwT7eocH
        status: active
        display_name: 王常
        merged_into_person_id: null
  children:
    - claim:
        id: c_krFE6fkyxU8io1D7R9EMrI
        subject_person_id: p_2E4LCv8Nov8DxpvHNn8a4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UJHNJUefP1hMoQv16JZ99z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SThC1di8SjvUzuoaCrZkPC
          claim_id: c_krFE6fkyxU8io1D7R9EMrI
          source_id: s_yujo92cz27U8dwZherbwgg
          stance: supports
          locator: 王氏一原世譜，24a：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UJHNJUefP1hMoQv16JZ99z
        status: active
        display_name: 王師愈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景文 | accepted |
| birth.date | 1083年 | accepted |
| death.date | 1140年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5MKKK3FSS4K8A2mwT7eocH | 王常 | accepted |
| children | p_UJHNJUefP1hMoQv16JZ99z | 王師愈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景文（CBDB 23216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23216&o=json)
