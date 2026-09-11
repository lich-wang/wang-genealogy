---
schema: wang-person/v1
id: p_an7ov6FgpfVGhQMeCjTmjs
status: active
merged_into: null
display_name: 王璉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LE9oMx3gbaWTKeUXta4wfe
        subject_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PyfcCkwczk6qE85a2GvUQD
          claim_id: c_LE9oMx3gbaWTKeUXta4wfe
          source_id: s_PmivFpkMA3kVAkJtL4zax5
          stance: supports
          locator: CBDB:18285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（18285）
          source: &a1
            id: s_PmivFpkMA3kVAkJtL4zax5
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 18285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18285&o=json
            external_identifier: CBDB:18285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1Cj31amVN5yrzeLKEzY7mF
        subject_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 926年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBg8jiqQhqj7MY7DdNVaLU
          claim_id: c_1Cj31amVN5yrzeLKEzY7mF
          source_id: s_PmivFpkMA3kVAkJtL4zax5
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
        id: c_at6BJMHD6PYw4H4TN9ANaH
        subject_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftGE53e1kxDU8y1KvSjfmD
          claim_id: c_at6BJMHD6PYw4H4TN9ANaH
          source_id: s_PmivFpkMA3kVAkJtL4zax5
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
        id: c_yv1jAFV8hRZs819sQFJyxm
        subject_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉（926年—973年），宋人物。籍贯莒縣，身份为義軍首領、農民，入仕世襲(替)，曾任太子洗馬。（中国历代人物传记资料库 CBDB 18285）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L26pMZ0vnUw6gnPTJlfU8C
          claim_id: c_yv1jAFV8hRZs819sQFJyxm
          source_id: s_PmivFpkMA3kVAkJtL4zax5
          stance: supports
          locator: CBDB:18285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__3dsN4a33zvIQ-ZCcvE3eO
        subject_person_id: p_G4qJ7yPaYSWAivkaqit1c4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iaGuGvDAmSCZK6vuiOv24
          claim_id: c__3dsN4a33zvIQ-ZCcvE3eO
          source_id: s_PmivFpkMA3kVAkJtL4zax5
          stance: supports
          locator: CBDB 双向互证（父 王徽 ⇄ 子 王璉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_G4qJ7yPaYSWAivkaqit1c4
        status: active
        display_name: 王徽
        merged_into_person_id: null
  children:
    - claim:
        id: c_FXX7BAaiILcnrewVcdINWF
        subject_person_id: p_an7ov6FgpfVGhQMeCjTmjs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ncJMsYgNL3hQVCtFzxU5EN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cC-Y2NOcGBaYKmyoOdV7F4
          claim_id: c_FXX7BAaiILcnrewVcdINWF
          source_id: s_PmivFpkMA3kVAkJtL4zax5
          stance: supports
          locator: CBDB 双向互证（子 王子輿 ⇄ 父 王璉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ncJMsYgNL3hQVCtFzxU5EN
        status: active
        display_name: 王子輿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| birth.date | 926年 | accepted |
| death.date | 973年 | accepted |
| bio.summary | 王璉（926年—973年），宋人物。籍贯莒縣，身份为義軍首領、農民，入仕世襲(替)，曾任太子洗馬。（中国历代人物传记资料库 CBDB 18285） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G4qJ7yPaYSWAivkaqit1c4 | 王徽 | accepted |
| children | p_ncJMsYgNL3hQVCtFzxU5EN | 王子輿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 18285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18285&o=json)
