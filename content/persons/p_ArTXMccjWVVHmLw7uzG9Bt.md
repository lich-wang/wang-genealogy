---
schema: wang-person/v1
id: p_ArTXMccjWVVHmLw7uzG9Bt
status: active
merged_into: null
display_name: 王悦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DofPisEjwCaXm5ma8EAnF9
        subject_person_id: p_ArTXMccjWVVHmLw7uzG9Bt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王悦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CuDwDjHZqDD3GvURY1XCPG
          claim_id: c_DofPisEjwCaXm5ma8EAnF9
          source_id: s_GyR8k4LQ1EqrwkQUhEzJGu
          stance: supports
          locator: CBDB:144828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144828）
          source: &a1
            id: s_GyR8k4LQ1EqrwkQUhEzJGu
            source_type: api_record
            title: 中国历代人物传记资料库：王悦（CBDB 144828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144828&o=json
            external_identifier: CBDB:144828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XdxAQWZSVFNDujr463VuQP
        subject_person_id: p_ArTXMccjWVVHmLw7uzG9Bt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 953年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsbTjFCpFVkWMYHR1KXMF2
          claim_id: c_XdxAQWZSVFNDujr463VuQP
          source_id: s_GyR8k4LQ1EqrwkQUhEzJGu
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
        id: c_9dappPRK7JqixNG17Ru3WV
        subject_person_id: p_ArTXMccjWVVHmLw7uzG9Bt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1005年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHHGboVXEN4mUZyj1NsC33
          claim_id: c_9dappPRK7JqixNG17Ru3WV
          source_id: s_GyR8k4LQ1EqrwkQUhEzJGu
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
        id: c_yqtzx38Fw8hFHQ38YYHE4L
        subject_person_id: p_ArTXMccjWVVHmLw7uzG9Bt
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
        - id: cs_FknVmFLLC8Soxmiy8DMPPz
          claim_id: c_yqtzx38Fw8hFHQ38YYHE4L
          source_id: s_GyR8k4LQ1EqrwkQUhEzJGu
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
        id: c_GLH8C2vvuOK2shZSV3cyYV
        subject_person_id: p_FiwAwcqYD13xAZJumekWBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ArTXMccjWVVHmLw7uzG9Bt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uu8ogp0sy0PFmb-SpNqYc2
          claim_id: c_GLH8C2vvuOK2shZSV3cyYV
          source_id: s_GyR8k4LQ1EqrwkQUhEzJGu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FiwAwcqYD13xAZJumekWBH
        status: active
        display_name: 王廷阮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王悦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王悦 | accepted |
| birth.date | 953年 | accepted |
| death.date | 1005年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FiwAwcqYD13xAZJumekWBH | 王廷阮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王悦（CBDB 144828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144828&o=json)
