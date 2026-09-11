---
schema: wang-person/v1
id: p_c5ELpWDoKzuga19Wywcds9
status: active
merged_into: null
display_name: 王庭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8sZmRMjxXzsuWr1YovqV5n
        subject_person_id: p_c5ELpWDoKzuga19Wywcds9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6dAhr28w1eLAguNiWfkLE
          claim_id: c_8sZmRMjxXzsuWr1YovqV5n
          source_id: s_iMvHkHecNYCijisiLoXDw8
          stance: supports
          locator: CBDB:126632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126632）
          source: &a1
            id: s_iMvHkHecNYCijisiLoXDw8
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 126632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126632&o=json
            external_identifier: CBDB:126632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cyfiMZB1RcxjKM2JiFAZr1
        subject_person_id: p_c5ELpWDoKzuga19Wywcds9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyJuVhbYtpbqQv74rMz5Yo
          claim_id: c_cyfiMZB1RcxjKM2JiFAZr1
          source_id: s_iMvHkHecNYCijisiLoXDw8
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
        id: c_NBmsJ9BLPA2qit4hKiLn44
        subject_person_id: p_c5ELpWDoKzuga19Wywcds9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1571年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sdWzkugPkrDNt9xQ3JY94E
          claim_id: c_NBmsJ9BLPA2qit4hKiLn44
          source_id: s_iMvHkHecNYCijisiLoXDw8
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
        id: c_jsEP931NKFL5LKxjtEH8FT
        subject_person_id: p_c5ELpWDoKzuga19Wywcds9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭（1488年—1571年），明人物。籍贯長洲，入仕進士，曾任布政使司參議、提刑按察使司僉事、王府長史。（中国历代人物传记资料库 CBDB 126632）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x6gG0ge4OCi8cZWKLZD2Zm
          claim_id: c_jsEP931NKFL5LKxjtEH8FT
          source_id: s_iMvHkHecNYCijisiLoXDw8
          stance: supports
          locator: CBDB:126632
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OqForhZP2jVkXs9nil33OH
        subject_person_id: p_c5ELpWDoKzuga19Wywcds9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DcJGi4GcdCc4u1btEFY1hx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kuGd9UdyceeDFuS31ga1II
          claim_id: c_OqForhZP2jVkXs9nil33OH
          source_id: s_iMvHkHecNYCijisiLoXDw8
          stance: supports
          locator: "(乾隆)元和縣志: 三十六卷，lgid=178273：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DcJGi4GcdCc4u1btEFY1hx
        status: active
        display_name: 王敬臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| birth.date | 1488年 | accepted |
| death.date | 1571年 | accepted |
| bio.summary | 王庭（1488年—1571年），明人物。籍贯長洲，入仕進士，曾任布政使司參議、提刑按察使司僉事、王府長史。（中国历代人物传记资料库 CBDB 126632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DcJGi4GcdCc4u1btEFY1hx | 王敬臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 126632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126632&o=json)
